import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: null,
};

const gptMovieSlice = createSlice({
  name: "gptMovies",
  initialState,
  reducers: {
    setGptMovies: (state, action) => {
      const { movies } = action.payload;
      state.movies = movies;
    },
  },
});

export const { setGptMovies } = gptMovieSlice.actions;

export const selectGptMovies = (state) => state.gptMovies.movies;

export default gptMovieSlice.reducer;
