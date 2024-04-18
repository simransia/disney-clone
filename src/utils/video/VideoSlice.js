import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trailerVideo: null,
};

const movieVideoSlice = createSlice({
  name: "movieVideo",
  initialState,
  reducers: {
    setTrailer: (state, action) => {
      state.trailerVideo = action.payload.trailerVideo;
    },
  },
});

export const { setTrailer } = movieVideoSlice.actions;

export const selectTrailer = (state) => state.movieVideo.trailerVideo;

export default movieVideoSlice.reducer;
