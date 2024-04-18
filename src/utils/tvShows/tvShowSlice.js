import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlaying: null,
  topRated: null,
  popular: null,
  upcoming: null,
};

const tvShowSlice = createSlice({
  name: "tvShow",
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

export const { setMovies } = tvShowSlice.actions;

export const selectTopRated = (state) => state.tvShow.topRated;
export const selectPopular = (state) => state.tvShow.popular;

export default tvShowSlice.reducer;
