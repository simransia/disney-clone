import React, { Fragment } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { IoShareSocial } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import {
  Background,
  Container,
  DetailsContainer,
  Wrap,
} from "./movieDetailsStyles";
import { Carousel, Wrap as Cell } from "../../styles/globalStyle";
import useDetailData from "../../hooks/useDetailData";

function MovieDetails(props) {
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

  const { movies, detailData, id } = useDetailData();

  console.log(movies, detailData);

  return (
    <DetailsContainer>
      <Container>
        <Wrap>
          <a href={"/detail/" + id + "/watch"}>
            <span>
              <p className="subscribe">SUBSCRIBER</p>
              <h2>{detailData.title}</h2>
              <p className="sub-head">{detailData.subTitle}</p>
              <p>{detailData.description}</p>
            </span>
            <div className="icons">
              <div className="inner">
                <div className="watch">
                  <FaPlay className="watch-item" />
                  <p className="watch-item">{detailData.watch}</p>
                </div>
                <div className="grid-container">
                  <BsPlusLg className="grid-item" />
                  <IoShareSocial className="grid-item" />
                  <p className="grid-item">WATCHLIST</p>
                  <p className="grid-item">SHARE</p>
                </div>
              </div>
            </div>
            <img src={detailData.backgroundImg} />
          </a>
        </Wrap>
      </Container>
      <br />
      <br />
      <h3>More Like This</h3>
      <Carousel {...settings}>
        {movies &&
          movies.map((movie, key) =>
            movie.id != id ? (
              <Link to={"/detail/" + movie.id} key={key}>
                <Cell>
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
                </Cell>
              </Link>
            ) : (
              ""
            )
          )}
      </Carousel>
    </DetailsContainer>
  );
}

export default MovieDetails;
