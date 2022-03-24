import axios from "axios";
import React, { useEffect } from "react";
import Chip from "@material-ui/core/Chip";
import "./genres.css";

const Genre = ({
  selectedGenre,
  setSelectedGenre,
  genres,
  setGenres,
  type,
  setPages,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenre([...selectedGenre, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPages(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenre(
      selectedGenre.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPages(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=2b7d819095d4001352de4aa47e90ebc2&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({});
    }; // eslint-disable-next-line
  }, []);

  return (
    <div className="genres-container">
      {selectedGenre &&
        selectedGenre.map((genre) => (
          <Chip
            label={genre.name}
            size="small"
            key={genre.id}
            variant="outlined"
            clickable
            onDelete={() => handleRemove(genre)}
          />
        ))}
      {genres &&
        genres.map((genre) => (
          <Chip
            key={genre.id}
            size="small"
            variant="outlined"
            label={genre.name}
            clickable
            onClick={() => handleAdd(genre)}
          />
        ))}
    </div>
  );
};

export default Genre;
