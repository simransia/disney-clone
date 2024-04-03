import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../utils/user/userSlice";
import movieReducer from "../utils/movies/movieSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },

  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
