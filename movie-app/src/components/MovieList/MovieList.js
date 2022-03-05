import React, { useState } from 'react';
import MovieDetails from '../MovieDetails/MovieDetails';
import div from './movieList.css';

const MovieList = (props) => {
  const [details, setDetails] = useState(false);

  const showDetails = () => {
    setDetails(true)
  }

  return (
		<div className="movie-container">
      {props.movies.map((movie, id) => (
        <div className="card" key={id} style={{"width": "18rem"}}>
          <div className="row">
            <img src={movie.Poster} className="card-img-top" alt="movie"></img>
            <div className="overlay" onClick={showDetails}><span className="details">Details</span>
            </div>
          </div>
        </div>
      ))}
      <MovieDetails
        visible={details}
        onCancel={() => setDetails(false)}
        closeBtnShow
      >
      </MovieDetails>
    </div>
	)
}

export default MovieList;