import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, Wrap } from "../../views/movieDetails/movieDetailsStyles";
import { SliderContainer } from "./SliderStyles";
import { Link } from "react-router-dom";

function ImageSlider(props) {
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
    <SliderContainer>
      <Carousel {...settings}>
        <Wrap>
          <Link to="#">
            <span>
              <h2>Shang-Chi and The Legend of The Ten Rings</h2>
              <p className="sub-head">Superhero - 2021</p>
              <p>
                Shang-Chi, a martial arts master, must confront the past he
                thought he left behind when he is drawn into the web of the
                mysterious Ten Rings organization.
              </p>
            </span>
            <img src="/images/slider-img-2.jfif" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="#">
            <span>
              <h2>Encanto</h2>
              <p className="sub-head">Fantasy - 2021</p>
              <p>
                When Mirabel, the only ordinary member of the Madrigal family,
                discovers the magic surrounding their home is in danger, she may
                be her family's last hope.
              </p>
            </span>
            <img src="/images/slider-img-3.jfif" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="#">
            <span>
              <h2>The Ice Age Adventures of Buck Wild</h2>
              <p className="sub-head">English. Family - 2022</p>
              <p>
                The hilarious escapades of everyone's favourite prehistoric
                mammals Crash and Eddie continue, as they join pal Buck Wild to
                take on dinosaurs of the Lost World.
              </p>
            </span>
            <img src="/images/slider-img-1.jfif" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="#">
            <span>
              <h2>The Book of Boba Fett</h2>
              <p className="sub-head">Star Wars Action</p>
              <p>
                No longer just a hired gun, Boba Fett reinvents himself on
                Tatooine alongside Fennec Shand.
              </p>
            </span>
            <img src="/images/slider-img-4.png" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="#">
            <span>
              <h2>Hawkeye</h2>
              <p className="sub-head">Marvel Superhero</p>
              <p>
                Clint Barton/Hawkeye must team up with skilled archer Kate
                Bishop to unravel a criminal conspiracy.
              </p>
            </span>
            <img src="/images/slider-img-6.jfif" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="#">
            <span>
              <h2>Snowdrop</h2>
              <p className="sub-head">
                1 Season 3 Episodes Romance U/A 13+ Select Picks
              </p>
              <p>
                NEW EPISODES EVERY WEDNESDAY AT 1:30 PM. An enduring love story
                of university students Yeong-ro and Soo-ho blooms amidst a
                dangerous political situation in Seoul. What will happen to
                their fate?
              </p>
            </span>
            <img src="/images/slider-img-5.jfif" alt="" />
          </Link>
        </Wrap>
      </Carousel>
    </SliderContainer>
  );
}

export default ImageSlider;
