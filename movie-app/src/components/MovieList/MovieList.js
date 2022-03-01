import React, { useState } from 'react';
import MovieDetails from '../MovieDetails/MovieDetails';
import div from './movieList.css';

const MovieList = (props) => {
  const [showDetails, setDetails] = useState(false);

  return (
		<div className="movie-container">
      {props.movies.map((movie, id) => (
        <div className="card" key={movie.id} style={{"width": "18rem"}}>
          <div className="row">
            <img src={movie.Poster} className="card-img-top" alt="movie"></img>
            <div className="overlay" onClick={() => setDetails(true)}><span className="details">Details</span>
            </div>
          </div>
        </div>
      ))}
      <MovieDetails
        visible={showDetails}
        onCancel={() => setDetails(false)}
        closeBtnShow
      >
      </MovieDetails>
    </div>
	)
}

export default MovieList;