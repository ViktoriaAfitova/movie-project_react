import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Trending = () => {
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=2b7d819095d4001352de4aa47e90ebc2')
    console.log(data);
    setContent(data.results)
  }

  useEffect(() => {
    fetchTrending();
  }, [])

  return (
    <div>
      <span className='pageTitle'>Trending</span>
      <div>
        {content && content.map((c) => console.log(c))}
      </div>
    </div>
  )
}

export default Trending;