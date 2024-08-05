import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  channels: null,
  languages: null,
  genres: null,
  sports: null,
};

const categorylice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      const { languages, genres, sports, channels } = action.payload;
      state.languages = languages;
      state.genres = genres;
      state.sports = sports;
      state.channels = channels;
    },
  },
});

export const { setCategory } = categorylice.actions;

export const selectGenres = (state) => state.category.genres;
export const selectSports = (state) => state.category.sports;
export const selectChannels = (state) => state.category.channels;
export const selectLanguages = (state) => state.category.languages;

export default categorylice.reducer;
