import React from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { Carousel, ListContainer, Wrap } from "../../styles/globalStyle";

const GenereList = ({ movies, title }) => {
  let settings = {
    infinite: false,
    slidesToShow: 8,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 4,
        },
      },
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

  return (
    <ListContainer>
      <h4>{title}</h4>
      <Carousel {...settings}>
        {movies &&
          movies.map((movie, key) => (
            <Link to={"/detail/" + movie.id} key={key}>
              <Wrap>
                <span>
                  <h2>{movie.title}</h2>
                  <h3>{movie.subTitle}</h3>
                  <p className="grey">
                    <b>{movie.description.slice(0, 55)}</b>...
                  </p>
                  <p className="grey">
                    {" "}
                    <AiOutlinePlus /> ADD TO WATCHLIST
                  </p>
                </span>
                <img src={movie.cardImg} alt="" />
              </Wrap>
            </Link>
          ))}
      </Carousel>
    </ListContainer>
  );
};

export default GenereList;
