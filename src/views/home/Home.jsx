import React, { Fragment } from "react";
import {
  Viewers,
  ImageSlider,
  AnimalsAndNature,
  DisneyJunior,
  DisneyOriginals,
  HitMovies,
  MickeyAndFriends,
  NewToDisney,
  Recommended,
  Women,
} from "../../components";
import useAddDataToStore from "../../hooks/useAddDataToStore";

const Home = () => {
  useAddDataToStore();

  return (
    <Fragment>
      <ImageSlider />
      <Viewers />
      <Recommended />
      <NewToDisney />
      <Women />
      <HitMovies />
      <DisneyOriginals />
      <AnimalsAndNature />
      <MickeyAndFriends />
      <DisneyJunior />
    </Fragment>
  );
};

export default Home;
