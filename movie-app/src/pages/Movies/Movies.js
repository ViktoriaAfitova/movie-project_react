import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrendingMoviesList from '../../components/TrendingMoviesList/TrendingMoviesList';
import PagePagination from '../../components/PagePagination/PagePagination';
import Genres from '../../components/Genres/Genres';
import useGenre from '../../hooks/useGenre';

const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const genreForURL = useGenre(selectedGenre);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=2b7d819095d4001352de4aa47e90ebc2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForURL}`)
    setContent(data.results);
    setNumOfPages(data.total_pages)
  }

  useEffect(() => {
    fetchMovies();
  }, [page, genreForURL])

  return (
    <div>
      <span className='page-title'>Movies</span>
      <Genres
        type='movie'
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className='trending'>
        {content && content.map((c) => (
          <TrendingMoviesList
            key={c.id}
            id={c.id}
            poster={c.poster_path}
            title={c.title || c.name}
            date={c.first_air_date || c.release_date}
            media_type='movie'
            vote_average={c.vote_average}
          />
        ))}
      </div>
      {numOfPages > 1 && (
        <PagePagination setPage={setPage} numOfPages={numOfPages}/>
      )}
    </div>
  )
}

export default Movies;