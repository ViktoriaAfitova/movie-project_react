import React, { useState, useEffect} from 'react';
import div from './movieSearch.css';

const MovieSearch = (props) => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=df9d5da7`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue])

  return (
    <div>
        <input
          className="form-control"
          value={props.value}
          placeholder="Search"
          onChange={(e) => props.setSearchValue(e.target.value)}
        ></input>
    </div>
  )
}

export default MovieSearch;