import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import TrendingMoviesList from '../../components/TrendingMoviesList/TrendingMoviesList';
import './trending.css';
import PagePagination from '../../components/PagePagination/PagePagination';
import { setMovie } from '../../components/reducer/reducer';
import Context from '../../components/context/context';

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const { state, dispatch } = useContext(Context);

  const fetchTrending = async () => {

    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=2b7d819095d4001352de4aa47e90ebc2&page=${page}&query=${state.query}`)
    setContent(data.results)
    // dispatch(setMovie(data.results))
  }


  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line
  }, [page])


  useEffect(()=> {
    console.log(state.movies)
     setContent(content.filter(c=>state.movies.includes(c.id)))
  }, [state.movies])

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
      <PagePagination setPage={setPage} />
    </div>
  )
}

export default Trending;