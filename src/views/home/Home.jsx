import React from "react";
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
  Sidebar,
} from "../../components";
import useAddDataToStore from "../../hooks/useAddDataToStore";
import { Container, Content } from "./homeStyles";

const Home = () => {
  useAddDataToStore();

  return (
    <Container>
      <Sidebar />
      <Content>
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
      </Content>
    </Container>
  );
};

export default Home;
