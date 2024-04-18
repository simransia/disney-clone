import React, { Fragment } from "react";
import { Viewers, ImageSlider, GenereList } from "../../components";
import useAddDataToStore from "../../hooks/useAddDataToStore";
import { useSelector } from "react-redux";
import {
  selectanimalsAndNature,
  selectDisneyJuniorSeries,
  selectMickeyAndFriends,
  selectDisneyOriginals,
  selectHitMovies,
  selectNewDisney,
  selectWomen,
  selectRecommend,
} from "../../utils/genere/genereSlice";
import BackgroundVideo from "../../components/movieVideo/BackgroundVideo";

const Home = () => {
  useAddDataToStore();

  const animalsAndNatureMovies = useSelector(selectanimalsAndNature);
  const disneyJuniorSeries = useSelector(selectDisneyJuniorSeries);
  const mickeyAndFriendsMovies = useSelector(selectMickeyAndFriends);
  const newToDisneyMovies = useSelector(selectNewDisney);
  const disneyOriginals = useSelector(selectDisneyOriginals);
  const womenMovies = useSelector(selectWomen);
  const hitMovies = useSelector(selectHitMovies);
  const recommendedMovies = useSelector(selectRecommend);

  return (
    <Fragment>
      <ImageSlider />
      <BackgroundVideo movieId={872585} />
      <Viewers />
      <GenereList movies={recommendedMovies} title="Recommended For You" />
      <GenereList movies={newToDisneyMovies} title="New To Disney+" />
      <GenereList movies={womenMovies} title="Women Lead The Way" />
      <GenereList movies={hitMovies} title="Hit Movies" />
      <GenereList movies={disneyOriginals} title="Disney Junior Series" />
      <GenereList movies={animalsAndNatureMovies} title="Animals and Nature" />
      <GenereList movies={mickeyAndFriendsMovies} title="Mickey And Friends" />
      <GenereList movies={disneyJuniorSeries} title="Disney Junior Series" />
    </Fragment>
  );
};

export default Home;
