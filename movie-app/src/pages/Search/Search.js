import React, { useState, useEffect } from "react";
import axios from "axios";
import PagePagination from "../../components/PagePagination/PagePagination";
import TrendingMoviesList from "../../components/TrendingMoviesList/TrendingMoviesList";

const Search = (props) => {
  const [page, setPage] = useState(0);
  const [numOfPages, setNumOfPages] = useState();
  const [type, setType] = useState(0);
  const [content, setContent] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${
        type ? "tv" : "movie"
      }?api_key=2b7d819095d4001352de4aa47e90ebc2&language=en-US&query=${searchValue}&page=${page}&include_adult=false`
    );
    console.log(data);
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
  }, [searchValue, page]);

  return (
    <div>
      <input
        className="form-control"
        value={props.value}
        placeholder="Search"
        onChange={(e) => props.setSearchValue(e.target.value)}
      ></input>
      <div className="trending">
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
      </div>
      {searchValue &&
        !content &&
        (type ? <h2>Series not found</h2> : <h2>Movie not found</h2>)}
      {numOfPages > 1 && (
        <PagePagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Search;
