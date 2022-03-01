import React from 'react';
import div from './movieList.css';

const MovieList = (props) => {

  return (
		<div className="movie-container">
      {props.movies.map((movie, id) => (
        <div className="card" key={movie.id} style={{"width": "18rem"}}>
          <div className="row">
            <img src={movie.Poster} className="card-img-top" alt="movie"></img>
            <div className="overlay"><span className="details">Details</span>
            </div>
          </div>
        </div>
      ))}
    </div>
	)
}

export default MovieList;