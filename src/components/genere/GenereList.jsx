import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { Carousel, ListContainer, Wrap } from "../../styles/globalStyle";

const GenereList = ({ movies, title }) => {
  const [movieList, setMovieList] = useState([]);

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

  const normalizeKeys = (movie) => {
    const normalizedMovie = {};
    for (let key in movie) {
      const normalizedKey = key.trim();
      normalizedMovie[normalizedKey] = movie[key];
    }
    return normalizedMovie;
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
