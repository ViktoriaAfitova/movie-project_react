import React, { useEffect, useState } from 'react';
import './App.css';
import './index.css';
import MovieList from './components/MovieList/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = 'http://www.omdbapi.com/?s=star wars&apikey=df9d5da7';
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    setMovies(responseJson.Search);
  }

  useEffect(() => {
    getMovieRequest();
  }, [])

  return (
    <div className="App">
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
