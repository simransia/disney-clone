import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sportsMovie: null,
  bingeShows: null,
  popular: null,
};

const sportsSlice = createSlice({
  name: "sports",
  initialState,
  reducers: {
    setSports: (state, action) => {
      const { bingeShows, popular, sportsMovie } = action.payload;

      state.bingeShows = bingeShows;
      state.popular = popular;
      state.sportsMovie = sportsMovie;
    },
  },
});

export const { setSports } = sportsSlice.actions;

export const selectBingeShows = (state) => state.sports.bingeShows;
export const selectPopular = (state) => state.sports.popular;
export const selectSportsMovie = (state) => state.sports.sportsMovie;

export default sportsSlice.reducer;
