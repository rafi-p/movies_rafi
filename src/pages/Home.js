import React, { useEffect, useState } from "react";
import "./Home.css";
// import { Movies } from "../store/index";
import MovieCard from "../components/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
const API_KEY = "dca84c8292fcb24c27f37caf8d8735c4";

function Home() {
  const [pageMovie, setPageMovie] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState([]);

  const getData = async (page) => {
    const movies = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=${page}`
      )
    ).json();
    return movies;
  };

  useEffect(() => {
    const loadData = async () => {
      const newData = await getData(pageMovie);
      if (newData.page >= newData.total_pages) {
        setHasMore(false);
      }
      setData((prev) => [...prev, ...newData.results]);
    };

    loadData();
  }, [pageMovie]);

  // console.log(data);
  const fetchMoreData = () => {
    setPageMovie((prev) => prev + 1);
  };

  return (
    <section className="animate__animated animate__fadeIn ">
      <div className="content">
        <div className="textHeader">
          <h2>Movies</h2>
        </div>

        {data && (
          <InfiniteScroll
            dataLength={data.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>You have seen it all</b>
              </p>
            }
            className="movies"
          >
            {data.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })}
          </InfiniteScroll>
        )}
      </div>
    </section>
  );
}

export default Home;
