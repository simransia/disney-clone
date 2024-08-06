import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { ExploreContainer } from "./exploreStyles";

const Explore = () => {
  return (
    <div className="parent-container">
      <ExploreContainer>
        <div className="input-container">
          <IoSearchOutline />
          <input />
        </div>
      </ExploreContainer>
    </div>
  );
};

export default Explore;
