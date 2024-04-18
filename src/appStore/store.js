import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../utils/user/userSlice";
import genereReducer from "../utils/genere/genereSlice";
import movieReducer from "../utils/movies/moviesSlice";
import movieVideoReducer from "../utils/video/VideoSlice";
import tvShowReducer from "../utils/video/VideoSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    genere: genereReducer,
    movie: movieReducer,
    tvShow: tvShowReducer,
    movieVideo: movieVideoReducer,
  },

  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
