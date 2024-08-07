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
import { MediaListContainer } from "../../styles/globalStyle";
import {
  API_BASE_URL,
  API_FILTER,
  API_OPTIONS,
} from "../../constants/dataFetching";

const Movies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(selectNowPlaying);
  const popularMovies = useSelector(selectPopular);
  const topRatedMovies = useSelector(selectTopRated);
  const upcomingMovies = useSelector(selectupcoming);
  const [moviesData, setMoviesData] = useState([]);

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
      `${API_BASE_URL}/movie/now_playing${API_FILTER}`,
      setMoviesData,
      "nowPlaying"
    );
    fetchMoviesData(
      `${API_BASE_URL}/movie/popular${API_FILTER}`,
      setMoviesData,
      "popular"
    );
    fetchMoviesData(
      `${API_BASE_URL}/movie/top_rated${API_FILTER}`,
      setMoviesData,
      "topRated"
    );
    fetchMoviesData(
      `${API_BASE_URL}/movie/upcoming${API_FILTER}`,
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
