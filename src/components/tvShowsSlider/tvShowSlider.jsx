import React, { Fragment } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, Wrap } from "../../views/movieDetails/movieDetailsStyles";
import { TV_SHOWS_LIST } from "../../constants/tvShowsList";
import { Content } from "./showSliderStyles";
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

function TvShowSlider(props) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      {TV_SHOWS_LIST.map((item) => (
        <Content>
          <div className="content">
            <p className={`title`}>{item.title}</p>
            <p className="description">{item.description}</p>
            <p className="description-mobile">
              {item.description.slice(0, 60) + "..."}
            </p>
            <p className="genres">
              {item.genres.map((genre, ind) => (
                <span>
                  {genre} {item.genres.length !== ind + 1 ? "| " : ""}
                </span>
              ))}
            </p>
            <div className="btn-container">
              <button>
                <FaPlay />
                Watch Now
              </button>
              <button>
                {" "}
                <FaPlus />
              </button>
            </div>
          </div>
          <img src={item.img} alt="" />
        </Content>
      ))}
    </Carousel>
  );
}

export default TvShowSlider;
