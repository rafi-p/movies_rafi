import React from "react";
import "./MovieCard.css";
import { useHistory } from "react-router-dom";
// const base_Image = `https://image.tmdb.org/t/p/w300/xrI4EnZWftpo1B7tTvlMUXVOikd.jpg`

function MovieCard(props) {
  const { movie } = props;
  const history = useHistory();

  function toDetail(e, id) {
    e.preventDefault();
    history.push(`/${id}`);
  }

  return (
    <div className="cardMovie">
      <div className="container-img">
        <img
          onClick={(e) => toDetail(e, movie.id)}
          type="button"
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.title}
        />
      </div>

      <div className="card-body">
        <h6 className="card-title">
          <div className="title">{movie.title}</div>
        </h6>
      </div>
    </div>
  );
}

export default MovieCard;
