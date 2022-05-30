import React from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';
import Header from './Header';
import Recommended from './Recommended';
import NewToDisney from './NewToDisney';
import Women from './Women';
import HitMovies from './HitMovies';
import DisneyOriginals from './DisneyOriginals';
import AnimalsAndNature from './AnimalsAndNature';
import MickeyAndFriends from './MickeyAndFriends';
import DisneyJunior from './DisneyJunior';
import Footer from './Footer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from "../firebase";
import { setMovies } from "../features/movies/movieSlice";
import { selectUserName } from "../features/user/userSlice"


function Home(props) {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newToDisneys = [];
  let women = [];
  let hitMovies = [];
  let disneyOriginals = [];
  let animalsAndNature = [];
  let mickeyAndFriends = [];
  let disneyJuniorSeries = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newToDisneys = [...newToDisneys, { id: doc.id, ...doc.data() }]
            break;

          case "women":
            women = [...women, { id: doc.id, ...doc.data() }]
            break;

          case "hit":
            hitMovies = [...hitMovies, { id: doc.id, ...doc.data() }]
            break;

          case "disney":
            disneyOriginals = [...disneyOriginals, { id: doc.id, ...doc.data() }]
            break;

          case "animal":
            animalsAndNature = [...animalsAndNature, { id: doc.id, ...doc.data() }]
            break;

          case "mickey":
            mickeyAndFriends = [...mickeyAndFriends, { id: doc.id, ...doc.data() }]
            break;

          case "junior":
            disneyJuniorSeries = [...disneyJuniorSeries, { id: doc.id, ...doc.data() }]
            break;
        }
      } )

      dispatch(setMovies({
        recommend: recommends,
        newToDisney: newToDisneys,
        women: women,
        hitMovie: hitMovies,
        disneyOriginal: disneyOriginals,
        animalsAndNature: animalsAndNature,
        mickeyAndFriend: mickeyAndFriends,
        disneyJuniorSeries: disneyJuniorSeries,
      })
      );
    });
  }, [userName]);

  return (
    <> 
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
      <Footer/>
    </Container>
    </> 
  );
};

const Container = styled.div`
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
overflow-y: hidden;
display: block;
top: 72px;
padding: 0 calc(3.5vw + 5px);


&:after {
  background: url("/images/home-background.png") center center / cover no-repeat fixed;
  content: "";
  position: absolute;
  inset: 0px;
  opacity: 1;
  z-index: -1;
 
`;

export default Home;