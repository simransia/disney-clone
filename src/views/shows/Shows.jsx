import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPopular,
  selectFeaturingNow,
  selectTopRated,
  selectInTheSpotLight,
  setShows,
} from "../../utils/slices/tvShows/tvShowSlice";
import { MediaList } from "../../components";
import TvShowSlider from "../../components/tvShowsSlider/tvShowSlider";
import { MediaListContainer } from "../../styles/globalStyle";

const Shows = () => {
  const dispatch = useDispatch();
  const featuringNowShows = useSelector(selectFeaturingNow);
  const popularShows = useSelector(selectPopular);
  const topRatedShows = useSelector(selectTopRated);
  const inTheSpotLightShows = useSelector(selectInTheSpotLight);
  const [moviesData, setMoviesData] = useState([]);

  const API_BASE_URL = "https://api.themoviedb.org/3/tv/";

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
      `${API_BASE_URL}/airing_today?language=en-US&page=1`,
      setMoviesData,
      "featuringNow"
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
      `${API_BASE_URL}/on_the_air?language=en-US&page=1`,
      setMoviesData,
      "inTheSpotlight"
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(setShows(moviesData));
  }, [moviesData, dispatch]);

  return (
    <div className="parent-container">
      <TvShowSlider />
      <MediaListContainer>
        <MediaList movies={featuringNowShows} title="Featuring Now" />
        <MediaList movies={inTheSpotLightShows} title="In The SpotLight" />
        <MediaList movies={topRatedShows} title="Top Rated" />
        <MediaList movies={popularShows} title="Popular" />
      </MediaListContainer>
    </div>
  );
};

export default Shows;
