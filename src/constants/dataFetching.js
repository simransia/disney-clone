const API_BASE_URL = "https://api.themoviedb.org/3";

const API_FILTER = "?language=en-US&page=1";

const API_SPORTS_BASE_URL =
  "https://api.themoviedb.org/3/search/tv?query=sport&include_adult=false&language=en-US&page";

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_API_AUTHORIZATION_TMDB,
  },
};

export { API_BASE_URL, API_OPTIONS, API_FILTER, API_SPORTS_BASE_URL };
