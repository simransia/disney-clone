import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../slices/user/userSlice";
import genereReducer from "../slices/genere/genereSlice";
import movieReducer from "../slices/movies/moviesSlice";
import {
  movieVideoReducer,
  movieVideoDetailsReducer,
} from "../slices/video/VideoSlice";
import tvShowReducer from "../slices/tvShows/tvShowSlice";
import sportsReducer from "../slices/sports/sportsSlice";
import categoryReducer from "../slices/categories/categoriesSlice";
import gptMoviesReducer from "../slices/gptMovies/gptMoviesSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    genere: genereReducer,
    movie: movieReducer,
    tvShow: tvShowReducer,
    sports: sportsReducer,
    category: categoryReducer,
    movieVideo: movieVideoReducer,
    movieVideoDetails: movieVideoDetailsReducer,
    gptMovies: gptMoviesReducer,
  },

  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
