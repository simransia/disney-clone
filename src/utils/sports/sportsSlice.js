import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlaying: null,
  topRated: null,
  popular: null,
  upcoming: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.topRated = action.payload.topRated;
      state.popular = action.payload.popular;
      state.upcoming = action.payload.upcoming;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectTopRated = (state) => state.movie.topRated;
export const selectPopular = (state) => state.movie.popular;
export const selectupcoming = (state) => state.movie.upcoming;

export default movieSlice.reducer;
