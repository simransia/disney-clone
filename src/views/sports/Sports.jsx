import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPopular,
  selectSportsMovie,
  selectBingeShows,
  setSports,
} from "../../utils/slices/sports/sportsSlice";
import { MediaList } from "../../components";
import useAddCategories from "../../hooks/useAddCategoriesToStore";
import CategoryList from "../../components/categoryList/categoryList";
import { selectSports } from "../../utils/slices/categories/categoriesSlice";
import { CategoryContainer } from "../categories/categoryStyles";
import { MediaListContainer } from "../../styles/globalStyle";
import { API_SPORTS_BASE_URL, API_OPTIONS } from "../../constants/dataFetching";

const Sports = () => {
  const dispatch = useDispatch();
  const bingeShows = useSelector(selectBingeShows);
  const popular = useSelector(selectPopular);
  // const sportMovies = useSelector(selectSportsMovie);
  const [moviesData, setMoviesData] = useState([]);

  useAddCategories();
  const sports = useSelector(selectSports);

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
    fetchMoviesData(`${API_SPORTS_BASE_URL}=1`, setMoviesData, "bingeShows");
    fetchMoviesData(`${API_SPORTS_BASE_URL}=2`, setMoviesData, "popular");
    // fetchMoviesData(
    //   `https://api.themoviedb.org/3/search/movie?query=sports&include_adult=false&language=hi-IN&page=1`,
    //   setMoviesData,
    //   "sportsMovie"
    // );
  }, [dispatch]);

  useEffect(() => {
    dispatch(setSports(moviesData));
    console.log("Dispatching setSports with:", moviesData);
  }, [moviesData, dispatch]);

  return (
    <CategoryContainer>
      {/* <ImageSlider /> */}

      <MediaListContainer>
        <CategoryList category={sports} title="Popular Sports" />
        <MediaList
          movies={bingeShows?.filter((item) => item.poster_path !== null)}
          title="Binge-worthy Sports Shows"
        />
        {/* <MediaList
        movies={sportMovies?.filter((item) => item.poster_path !== null)}
        title="Must-watch Sports Movies"
      /> */}
        <MediaList
          movies={popular?.filter((item) => item.poster_path !== null)}
          title="Trending"
        />
      </MediaListContainer>
    </CategoryContainer>
  );
};

export default Sports;
