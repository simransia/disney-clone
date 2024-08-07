import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { ExploreContainer } from "./exploreStyles";
import openai from "../../utils/openai";

const Explore = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const searchText = e.target.search.value;

    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query : " +
    //   searchText +
    //   ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    // const askGPT = await openai.chat.completions.create({
    //   messages: [{ role: "system", content: gptQuery }],
    //   model: "gpt-4o-mini",
    // });

    // console.log(askGPT.choices[0]);
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
    </ExploreContainer>
  );
};

export default Explore;
