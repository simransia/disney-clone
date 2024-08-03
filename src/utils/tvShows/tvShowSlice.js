import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  featuringNow: null,
  inTheSpotlight: null,
  topRated: null,
  popular: null,
};

const tvShowSlice = createSlice({
  name: "tvShow",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      const { inTheSpotlight, topRated, popular, featuringNow } =
        action.payload;
      state.inTheSpotlight = inTheSpotlight;
      state.topRated = topRated;
      state.popular = popular;
      state.featuringNow = featuringNow;
    },
  },
});

export const { setMovies } = tvShowSlice.actions;

export const selectTopRated = (state) => state.tvShow.topRated;
export const selectPopular = (state) => state.tvShow.popular;
export const selectFeaturingNow = (state) => state.tvShow.featuringNow;
export const selectInTheSpotLight = (state) => state.tvShow.inTheSpotlight;

export default tvShowSlice.reducer;
