import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { ExploreContainer } from "./exploreStyles";
import openai from "../../utils/openai";
import { API_BASE_URL, API_OPTIONS } from "../../constants/dataFetching";
import { useDispatch, useSelector } from "react-redux";
import {
  setGptMovies,
  selectGptMovies,
} from "../../utils/slices/gptMovies/gptMoviesSlice";

const Explore = () => {
  const dispatch = useDispatch();

  const searchResults = useSelector(selectGptMovies);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      API_BASE_URL +
        "/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const searchText = e.target.search.value;

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText +
      ". only give me names of 10 movies (include both hindi and english movies if a particular language is not mentioned in the above query), comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const askGPT = await openai.chat.completions.create({
      messages: [{ role: "system", content: gptQuery }],
      model: "gpt-4o-mini",
    });

    if (!askGPT?.message?.content) {
    }

    const gptMovies = askGPT?.choices[0]?.message?.content?.split(",");

    const promiseArray = gptMovies?.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    const movies = [];

    tmdbResults.forEach((result, index) => {
      const movie = result.filter(
        (movie) =>
          movie.title.trim().toLowerCase() ===
          gptMovies[index].trim().toLowerCase()
      )[0];
      if (movie) {
        movies.push(movie);
      }
    });

    dispatch(setGptMovies({ movies }));
  };

  return (
    <ExploreContainer>
      <div className="input-container">
        <IoSearchOutline />
        <form onSubmit={handleSubmit}>
          {" "}
          <input
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}
            name="search"
            placeholder="Tell me what you're interested in watching..."
          />
        </form>
        <iframe
          title="ai"
          src="https://giphy.com/embed/IiF5JOAhMZtU97GZgZ"
          width="60"
          height="60"
          className="gif"
          frameBorder="0"
          allowFullScreen
        />
      </div>
      <div className="search-results__container">
        {searchResults?.map((item, index) => (
          <div key={index} className="result-item">
            <div className="details">
              <img
                alt=""
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              />
              <p>{item.overview.slice(0, 80)}...</p>
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </ExploreContainer>
  );
};

export default Explore;
