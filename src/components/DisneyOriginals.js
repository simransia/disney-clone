import React from 'react';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlinePlus } from 'react-icons/ai';
import { useSelector } from "react-redux";
import { selectDisneyOriginals } from "../features/movies/movieSlice"
import {Carousel, Wrap} from "../MyStyle"

function DisneyOriginals(props) {
  const movies = useSelector(selectDisneyOriginals);

  let settings = {
    infinite: false,
    slidesToShow: 8,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
    ]
  };

  return (
    <>
      <h4>Disney+ Originals</h4>
      <Carousel {...settings}>

        {
          movies && movies.map((movie, key) => (

            <Link to={'/detail/' + movie.id}>
              <Wrap  key={key}>
              <span>
                  <h2>{movie.title}</h2>
                  <h3>{movie.subTitle}</h3>
                  <p className="grey"><b>{movie.description.slice(0, 55)}</b>...</p>
                  <p className="grey"> <AiOutlinePlus />ADD TO WATCHLIST</p>
                </span>
                <img src={movie.cardImg} />
              </Wrap>
              </Link>
           
          ))
        }
      </Carousel >
    </>
  )
}


export default DisneyOriginals;