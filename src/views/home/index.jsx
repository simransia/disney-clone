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
  Footer,
  Header,
} from "../../components";
import useAddDataToStore from "../../hooks/useAddDataToStore";
import { Container } from "./homeStyles";

const Home = () => {
  useAddDataToStore();

  return (
    <Fragment>
      <Header />
      <Container>
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
        <Footer />
      </Container>
    </Fragment>
  );
};

export default Home;
