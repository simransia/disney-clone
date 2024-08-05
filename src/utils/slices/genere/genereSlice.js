import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: null,
  newToDisney: null,
  women: null,
  hitMovie: null,
  disneyOriginal: null,
  animalsAndNature: null,
  mickeyAndFriend: null,
  disneyJuniorSeries: null,
};

const genereSlice = createSlice({
  name: "genere",
  initialState,
  reducers: {
    setGenere: (state, action) => {
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

export const { setGenere } = genereSlice.actions;

export const selectRecommend = (state) => state.genere.recommend;
export const selectNewDisney = (state) => state.genere.newToDisney;
export const selectWomen = (state) => state.genere.women;
export const selectHitMovies = (state) => state.genere.hitMovie;
export const selectDisneyOriginals = (state) => state.genere.disneyOriginal;
export const selectanimalsAndNature = (state) => state.genere.animalsAndNature;
export const selectMickeyAndFriends = (state) => state.genere.mickeyAndFriend;
export const selectDisneyJuniorSeries = (state) =>
  state.genere.disneyJuniorSeries;

export default genereSlice.reducer;
