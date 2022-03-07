import { img_300 } from "../Assets/Img/Img";
import "./trendingMoviesList.css";
import Badge from "@material-ui/core/Badge";

const TrendingMoviesList = (...data) => {
  return (
    <div className="movies-list">
      <Badge
        badgeContent={data[0].vote_average}
        color={data[0].vote_average > 6 ? "primary" : "secondary"}
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
    </div>
  );
};

export default TrendingMoviesList;
