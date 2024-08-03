import { createSlice } from "@reduxjs/toolkit";

const initialVideoState = {
  trailerVideo: [],
};

const initialVideoDetailsState = {
  trailerVideoDetails: [],
};

const movieVideoSlice = createSlice({
  name: "movieVideo",
  initialState: initialVideoState,
  reducers: {
    setTrailer: (state, action) => {
      state.trailerVideo.push(action.payload.trailerVideo);
    },
  },
});

const movieVideoDetailsSlice = createSlice({
  name: "movieVideoDetails",
  initialState: initialVideoDetailsState,
  reducers: {
    setTrailerDetails: (state, action) => {
      state.trailerVideoDetails.push(action.payload.trailerVideoDetails);
    },
  },
});

export const { setTrailer } = movieVideoSlice.actions;

export const { setTrailerDetails } = movieVideoDetailsSlice.actions;

export const selectTrailer = (state) => state.movieVideo.trailerVideo;
export const selectTrailerDetails = (state) =>
  state.movieVideoDetails.trailerVideoDetails;

export const movieVideoReducer = movieVideoSlice.reducer;
export const movieVideoDetailsReducer = movieVideoDetailsSlice.reducer;
