import React, { Fragment } from "react";
import { GenereList } from "../../components";
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
} from "../../utils/slices/genere/genereSlice";
import BackgroundVideo from "../../components/movieTrailer/BackgroundVideo";
import { Carousel } from "../../styles/globalStyle";
import { MOVIE_PREVIEW_DETAILS } from "../../constants/movieIds";
import { VideoContainer, GenereListContainer } from "./homeStyles";
import { useState } from "react";

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

  const [selectedID, setSelectedID] = useState(811634);

  let settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <Fragment>
      <VideoContainer>
        <BackgroundVideo movieId={selectedID} />
        <div className="small-preview">
          <Carousel {...settings}>
            {MOVIE_PREVIEW_DETAILS.map((item) => (
              <div
                onClick={() => setSelectedID(item.id)}
                className={`card-container`}
              >
                <div
                  className={`card ${
                    selectedID === item.id ? "highlight" : ""
                  }`}
                >
                  <img src={item.img} className="" alt="" />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </VideoContainer>
      <GenereListContainer>
        <GenereList movies={recommendedMovies} title="Recommended For You" />
        <GenereList movies={newToDisneyMovies} title="New To Disney+" />
        <GenereList movies={womenMovies} title="Women Lead The Way" />
        <GenereList movies={hitMovies} title="Hit Movies" />
        <GenereList movies={disneyOriginals} title="Disney Originals" />
        <GenereList
          movies={animalsAndNatureMovies}
          title="Animals and Nature"
        />
        <GenereList
          movies={mickeyAndFriendsMovies}
          title="Mickey And Friends"
        />
        <GenereList movies={disneyJuniorSeries} title="Disney Junior Series" />
      </GenereListContainer>
    </Fragment>
  );
};

export default Home;
