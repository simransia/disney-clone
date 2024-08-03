import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../utils/user/userSlice";
import genereReducer from "../utils/genere/genereSlice";
import movieReducer from "../utils/movies/moviesSlice";
import {
  movieVideoReducer,
  movieVideoDetailsReducer,
} from "../utils/video/VideoSlice";
import tvShowReducer from "../utils/tvShows/tvShowSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    genere: genereReducer,
    movie: movieReducer,
    tvShow: tvShowReducer,
    movieVideo: movieVideoReducer,
    movieVideoDetails: movieVideoDetailsReducer,
  },

  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
