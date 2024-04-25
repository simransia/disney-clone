import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPopular,
  selectNowPlaying,
  selectTopRated,
  selectupcoming,
  setMovies,
} from "../../utils/movies/moviesSlice";
import { ImageSlider, MediaList } from "../../components";

const Movies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(selectNowPlaying);
  const popularMovies = useSelector(selectPopular);
  const topRatedMovies = useSelector(selectTopRated);
  const upcomingMovies = useSelector(selectupcoming);
  const [moviesData, setMoviesData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMGMxMjEzN2YyMTIxNGEwNTljZTAzMTI2YjQ3MTdhMSIsInN1YiI6IjY2MTkyYTU3ZjlhYTQ3MDE3ZDM0OGM3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tyTcd6s8kLs1qWMgJw6rBg7Hr_B8GHfYSvMQOv7T5ec",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) =>
        setMoviesData((prev) => ({ ...prev, nowPlaying: response.results }))
      )
      .catch((err) => console.error(err));
  }, [dispatch]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) =>
        setMoviesData((prev) => ({ ...prev, popular: response.results }))
      )
      .catch((err) => console.error(err));
  }, [dispatch]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) =>
        setMoviesData((prev) => ({ ...prev, topRated: response.results }))
      )
      .catch((err) => console.error(err));
  }, [dispatch]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) =>
        setMoviesData((prev) => ({ ...prev, upcoming: response.results }))
      )
      .catch((err) => console.error(err));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setMovies(moviesData));
  }, [moviesData]);

  return (
    <div>
      <ImageSlider />
      <MediaList movies={nowPlayingMovies} title="Now Playing" />
      <MediaList movies={topRatedMovies} title="Top Rated" />
      <MediaList movies={popularMovies} title="Popular" />
      <MediaList movies={upcomingMovies} title="Upcoming" />
    </div>
  );
};

export default Movies;
