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
import {
  API_BASE_URL,
  API_FILTER,
  API_OPTIONS,
} from "../../constants/dataFetching";

const Shows = () => {
  const dispatch = useDispatch();
  const featuringNowShows = useSelector(selectFeaturingNow);
  const popularShows = useSelector(selectPopular);
  const topRatedShows = useSelector(selectTopRated);
  const inTheSpotLightShows = useSelector(selectInTheSpotLight);
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
      `${API_BASE_URL}/tv/airing_today${API_FILTER}`,
      setMoviesData,
      "featuringNow"
    );
    fetchMoviesData(
      `${API_BASE_URL}/tv/popular${API_FILTER}`,
      setMoviesData,
      "popular"
    );
    fetchMoviesData(
      `${API_BASE_URL}/tv/top_rated${API_FILTER}`,
      setMoviesData,
      "topRated"
    );
    fetchMoviesData(
      `${API_BASE_URL}/tv/on_the_air${API_FILTER}`,
      setMoviesData,
      "inTheSpotlight"
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(setShows(moviesData));
  }, [moviesData, dispatch]);

  return (
    <Fragment>
      <TvShowSlider />
      <MediaListContainer>
        <MediaList movies={featuringNowShows} title="Featuring Now" />
        <MediaList movies={inTheSpotLightShows} title="In The SpotLight" />
        <MediaList movies={topRatedShows} title="Top Rated" />
        <MediaList movies={popularShows} title="Popular" />
      </MediaListContainer>
    </Fragment>
  );
};

export default Shows;
