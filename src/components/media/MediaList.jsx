import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { Carousel, ListContainer, Wrap } from "../../styles/globalStyle";

const MovieList = ({ movies, title }) => {
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

  return (
    <ListContainer>
      <p className="title">{title}</p>
      <Carousel {...settings}>
        {movies &&
          movies.map((movie, key) => (
            <Link to={"/detail/" + movie.id} key={key}>
              <Wrap>
                <div>
                  <h2>{movie.title}</h2>
                  <h3>{movie.subTitle}</h3>
                  <p className="grey">
                    <b>{movie.overview.slice(0, 55)}</b>...
                  </p>
                  <p className="grey">
                    {" "}
                    <AiOutlinePlus /> ADD TO WATCHLIST
                  </p>
                </div>
                <img
                  src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                  alt=""
                />
              </Wrap>
            </Link>
          ))}
      </Carousel>
    </ListContainer>
  );
};

export default MovieList;
