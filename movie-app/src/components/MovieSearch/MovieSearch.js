import React from 'react';
import div from './movieSearch.css';

const MovieSearch = (props) => {
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