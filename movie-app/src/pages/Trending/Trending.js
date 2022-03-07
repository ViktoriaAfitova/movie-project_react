import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TrendingMoviesList from '../../components/TrendingMoviesList/TrendingMoviesList';
import './trending.css';

const Trending = () => {
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=2b7d819095d4001352de4aa47e90ebc2')
    console.log(data.results);
    setContent(data.results)
  }

  useEffect(() => {
    fetchTrending();
  }, [])

  return (
    <div>
      <span className='page-title'>Trending</span>
      <div className='trending'>
        {content && content.map((c) => (
          <TrendingMoviesList
            key={c.id}
            id={c.id}
            poster={c.poster_path}
            title={c.title || c.name}
            date={c.first_air_date || c.release_date}
            media_type={c.media_type}
            vote_average={c.vote_average}
          />
        ))}
      </div>
    </div>
  )
}

export default Trending;