import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPopular,
  selectSportsMovie,
  selectBingeShows,
  setSports,
} from "../../utils/slices/sports/sportsSlice";
import { ImageSlider, MediaList } from "../../components";
import useAddCategories from "../../hooks/useAddCategoriesToStore";
import CategoryList from "../../components/categoryList/categoryList";
import { selectSports } from "../../utils/slices/categories/categoriesSlice";
import { CategoryContainer } from "../categories/categoryStyles";
import { MediaListContainer } from "../../styles/globalStyle";

const Sports = () => {
  const dispatch = useDispatch();
  const bingeShows = useSelector(selectBingeShows);
  const popular = useSelector(selectPopular);
  // const sportMovies = useSelector(selectSportsMovie);
  const [moviesData, setMoviesData] = useState([]);

  useAddCategories();
  const sports = useSelector(selectSports);

  const API_BASE_URL =
    "https://api.themoviedb.org/3/search/tv?query=sport&include_adult=false&language=en-US&page";

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
      console.log(data, "data");
      setMoviesData((prev) => ({ ...prev, [key]: data.results }));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMoviesData(`${API_BASE_URL}=1`, setMoviesData, "bingeShows");
    fetchMoviesData(`${API_BASE_URL}=2`, setMoviesData, "popular");
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
