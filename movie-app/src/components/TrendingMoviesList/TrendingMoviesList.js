import { img_300 } from "../Assets/Img/Img";
import "./trendingMoviesList.css";
import Badge from "@material-ui/core/Badge";
import MovieModal from "../MovieModal/MovieModal";

const TrendingMoviesList = (...data) => {
  return (
    <MovieModal media_type={data[0].media_type} id={data[0].id}>
      <Badge
        badgeContent={data[0].vote_average}
        color={data[0].vote_average > 6 ? "secondary" : "primary" }
      />
      <img
        className="movies-item__poster"
        src={`${img_300}${data[0].poster}`}
      />
      <h2 className="movies-item__title">{data[0].title}</h2>
      <span className="movies-item__subtitle">
        {data[0].media_type === "tv" ? "Tv Series" : "Movies"}
        <span>{data[0].date}</span>
      </span>
    </MovieModal>
  );
};

export default TrendingMoviesList;
