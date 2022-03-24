import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Context from "../../components/context/context";
import { setMovie } from "../../components/reducer/reducer";
import PagePagination from "../../components/PagePagination/PagePagination";
import TrendingMoviesList from "../../components/TrendingMoviesList/TrendingMoviesList";

const Search = () => {
  const [query, setQuery] = useState("");
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(0);
  const [numOfPages, setNumOfPages] = useState();
  const [type, setType] = useState(0);
  const { state, dispatch } = useContext(Context);

  const fetchSearch = async () => {
    // e.preventDefault();

    try {
      const { data } = await axios.get( `https://api.themoviedb.org/3/search/movie?api_key=2b7d819095d4001352de4aa47e90ebc2&query=${query}&include_adult=false`)
      // console.log(data.results);
      setContent(data.results)
      dispatch(setMovie(data.results))
    } catch (err) {}
  };

  useEffect(() => {
    fetchSearch();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <input
        className="form-control"
        value={query}
        type="text"
        placeholder="Search"
        name="query"
        onChange={(e) => setQuery(e.target.value)}
        onClick={fetchSearch}
      ></input>
      {/* <div className="trending">
        {content &&
          content.map((c) => (
            <TrendingMoviesList
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={c.vote_average}
            />
          ))}
      </div> */}
      {query &&
        !content &&
        (type ? <h2>Series not found</h2> : <h2>Movie not found</h2>)}
      {numOfPages > 1 && (
        <PagePagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </>
  );
};

export default Search;
