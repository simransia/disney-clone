import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPopular,
  selectNowPlaying,
  selectTopRated,
  selectupcoming,
  setMovies,
} from "../../utils/slices/movies/moviesSlice";
import { ImageSlider, MediaList } from "../../components";
import { GenereListContainer } from "../home/homeStyles";
import { MediaListContainer } from "../../styles/globalStyle";

const Movies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(selectNowPlaying);
  const popularMovies = useSelector(selectPopular);
  const topRatedMovies = useSelector(selectTopRated);
  const upcomingMovies = useSelector(selectupcoming);
  const [moviesData, setMoviesData] = useState([]);

  const API_BASE_URL = "https://api.themoviedb.org/3/movie";

  const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMGMxMjEzN2YyMTIxNGEwNTljZTAzMTI2YjQ3MTdhMSIsInN1YiI6IjY2MTkyYTU3ZjlhYTQ3MDE3ZDM0OGM3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tyTcd6s8kLs1qWMgJw6rBg7Hr_B8GHfYSvMQOv7T5ec",
    },
  };

  const fetchMoviesData = async (url, setMoviesData, key) => {
    try {
      const response = await fetch(url, API_OPTIONS);
      const data = await response.json();
      setMoviesData((prev) => ({ ...prev, [key]: data.results }));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMoviesData(
      `${API_BASE_URL}/now_playing?language=en-US&page=1`,
      setMoviesData,
      "nowPlaying"
    );
    fetchMoviesData(
      `${API_BASE_URL}/popular?language=en-US&page=1`,
      setMoviesData,
      "popular"
    );
    fetchMoviesData(
      `${API_BASE_URL}/top_rated?language=en-US&page=1`,
      setMoviesData,
      "topRated"
    );
    fetchMoviesData(
      `${API_BASE_URL}/upcoming?language=en-US&page=1`,
      setMoviesData,
      "upcoming"
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(setMovies(moviesData));
  }, [moviesData, dispatch]);

  return (
    <Fragment>
      <ImageSlider />
      <MediaListContainer>
        <MediaList movies={nowPlayingMovies} title="Now Playing" />
        <MediaList movies={topRatedMovies} title="Top Rated" />
        <MediaList movies={popularMovies} title="Popular" />
        <MediaList movies={upcomingMovies} title="Upcoming" />
      </MediaListContainer>
    </Fragment>
  );
};

export default Movies;
