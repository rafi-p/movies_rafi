import React, { useEffect, useState } from "react";
import "./MovieDetail.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { SimilarMovies, DetailMovie } from "../store/index";
import MovieCard from "../components/MovieCard";
const API_KEY = "dca84c8292fcb24c27f37caf8d8735c4";

function MovieDetail() {
  const dispatch = useDispatch();
  const [pageDetail, setPageDetail] = useState(1);
  const { id } = useParams();

  const dataSimilarMovie = useSelector((state) => state.similar.data.results);
  const loadingSimilarMovie = useSelector((state) => state.similar.loading);
  const errorSimilarMovie = useSelector((state) => state.similar.error);

  const dataDetailMovie = useSelector((state) => state.detailMovie.data);
  const loadingDetailMovie = useSelector((state) => state.detailMovie.loading);
  const errorDetailMovie = useSelector((state) => state.detailMovie.error);

  useEffect(() => {
    dispatch(
      SimilarMovies(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&page=${pageDetail}`
      )
    );
    dispatch(
      DetailMovie(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    );
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <section className="animate__animated animate__fadeIn ">
      <div className="content">
        <div className="textHeader">
          <h2>Detail Movie</h2>
        </div>
        {loadingDetailMovie ? (
          <div>Loading...</div>
        ) : (
          <div className="movie-detail">
            <div className="container-img-detail">
              <img
                src={`https://image.tmdb.org/t/p/original/${dataDetailMovie.backdrop_path}`}
                alt=""
              />
            </div>

            <div className="text-detail">
              <h1>{dataDetailMovie.title}</h1>
              <div className="tag">
                <span className="realese-date">
                  <i class="fas fa-calendar"></i>
                  {dataDetailMovie.release_date}
                </span>
                <p>|</p>
                <span className="tagline">{dataDetailMovie.tagline}</span>
              </div>

              <p className="overview" style={{ fontSize: "14px" }}>
                {dataDetailMovie.overview}
              </p>
            </div>
          </div>
        )}
        <div className="textHeader">
          <h2>Related Movie</h2>
        </div>
        {loadingSimilarMovie ? (
          <div>Loading...</div>
        ) : (
          <div className="movies">
            {dataSimilarMovie &&
              dataSimilarMovie.map((movie) => {
                return <MovieCard key={movie.id} movie={movie} />;
              })}
          </div>
        )}
      </div>
    </section>
  );
}

export default MovieDetail;
