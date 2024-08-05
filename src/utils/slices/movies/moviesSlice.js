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
      const { nowPlaying, topRated, popular, upcoming } = action.payload;
      state.nowPlaying = nowPlaying;
      state.topRated = topRated;
      state.popular = popular;
      state.upcoming = upcoming;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectNowPlaying = (state) => state.movie.nowPlaying;
export const selectTopRated = (state) => state.movie.topRated;
export const selectPopular = (state) => state.movie.popular;
export const selectupcoming = (state) => state.movie.upcoming;

export default movieSlice.reducer;
