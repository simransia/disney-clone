import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { Carousel, ListContainer, Wrap } from "../../styles/globalStyle";
import { normalizeKeys } from "../../utils/getNormalizedKeys";

const GenereList = ({ movies, title }) => {
  const [movieList, setMovieList] = useState([]);
  let settings = {
    infinite: false,
    slidesToShow: 8,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  useEffect(() => {
    if (movies) {
      const normalizedData = movies.map(normalizeKeys);
      setMovieList(normalizedData);
    }
  }, [movies]);

  return (
    <ListContainer>
      <p className="title">{title}</p>
      <Carousel {...settings}>
        {movieList &&
          movieList.map((movie, key) => (
            <Link to={"/detail/" + movie.id} key={key}>
              <Wrap>
                <div>
                  <h2>{movie.title}</h2>
                  <h3>{movie.subTitle}</h3>
                  <p className="grey">
                    <b>{movie.description?.slice(0, 55)}</b>...
                  </p>
                  <p className="grey">
                    {" "}
                    <AiOutlinePlus /> ADD TO WATCHLIST
                  </p>
                </div>
                <img src={movie.cardImg} alt="" />
              </Wrap>
            </Link>
          ))}
      </Carousel>
    </ListContainer>
  );
};

export default GenereList;
