import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: null,
  newToDisney: null,
  women:null,
  hitMovie:null,
  disneyOriginal:null,
  animalsAndNature:null,
  mickeyAndFriend: null,
  disneyJuniorSeries: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.newToDisney = action.payload.newToDisney;
      state.women = action.payload.women;
      state.hitMovie = action.payload.hitMovie;
      state.disneyOriginal = action.payload.disneyOriginal;
      state.animalsAndNature = action.payload.animalsAndNature;
      state.mickeyAndFriend = action.payload.mickeyAndFriend;
      state.disneyJuniorSeries = action.payload.disneyJuniorSeries;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = state => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newToDisney;
export const selectWomen = (state) => state.movie.women;
export const selectHitMovies = (state) => state.movie.hitMovie;
export const selectDisneyOriginals = (state) => state.movie.disneyOriginal;
export const selectanimalsAndNature = (state) => state.movie.animalsAndNature;
export const selectMickeyAndFriends = (state) => state.movie.mickeyAndFriend;
export const selectDisneyJuniorSeries = (state) => state.movie.disneyJuniorSeries;


export default movieSlice.reducer;