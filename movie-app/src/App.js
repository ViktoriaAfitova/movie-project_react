import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList/MovieList';
import MovieLogo from './components/MovieLogo/MovieLogo';
import MovieSearch from './components/MovieSearch/MovieSearch';

function App() {
  const [movies, setMovies] = useState([
    {
      Poster:
      "https://m.media-amazon.com/images/M/MV5BOGNlNGIyNDctMDJlZC00NjI2LWE1OTYtMTFjY2Y5YzJjNmIxXkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_SX300.jpg"
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNWRlZGIzYmItOTg4My00M2JjLTg5MjEtMjM1OTNmYzA4NWJkXkEyXkFqcGdeQXVyNzEzMDUxODk@._V1_SX300.jpg"
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_SX300.jpg",
    },
    {
      Poster:
      "https://m.media-amazon.com/images/M/MV5BZjQwMmMyMWYtMGM2NS00NTJiLTg4YWYtM2E2NGIyMmMwZDhmXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
    },
    {
      Poster:
      "https://m.media-amazon.com/images/M/MV5BOGJkNzEwMzMtMmFiYS00OTQ2LWE5ZWItOGM3MmE3NmMzNDczXkEyXkFqcGdeQXVyMTY0NTExNTk@._V1_SX300.jpg",
    },
    {
      Poster:
      "https://m.media-amazon.com/images/M/MV5BNGNjNjY1NjYtNmYxNC00OGYxLWFiMDgtZTdjN2EzYTdkYzU3XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_SX300.jpg",
    },
    {
      Poster:
      "https://m.media-amazon.com/images/M/MV5BYjFmOWUwYjgtM2UyYS00M2FmLTgwNmUtMWIwNTc2ZTgzNmRhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
    }
  ]);
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
    <div className="App">
      <div className="header">
        <MovieLogo />
        <MovieSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <MovieList
        movies={movies}
      />
    </div>
  );
}

export default App;
