import React from "react";
import useAddTrailerVideoData from "../../hooks/useAddTrailerVideoData";
import { Container } from "./bgVideoStyles";
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { MOVIE_PREVIEW_DETAILS } from "../../constants/movieIds";

const BackgroundVideo = ({ movieId }) => {
  const { trailerVideo, trailerVideoDetails } = useAddTrailerVideoData(movieId);

  const video = trailerVideo?.filter((item) => item.movieId === movieId)[0];

  const details = trailerVideoDetails?.filter(
    (item) => item.movieId === movieId
  )[0];

  if (!video || !details) {
    // Render a loading state or placeholder
    const image = MOVIE_PREVIEW_DETAILS.filter((item) => item.id === movieId)[0]
      .img;
    console.log(image);
    return (
      <Container className="">
        <img src={image} alt="" className="loading-image" />
      </Container>
    );
  }

  return (
    <Container className="">
      <iframe
        className="iframe"
        src={
          "https://www.youtube.com/embed/" +
          video?.key +
          "?&autoplay=1&mute=1&loop=1&playlist=" +
          video?.key
        }
        title="YouTube video player"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="overlay">
        <div className="video-details">
          {" "}
          <p className="title">{details?.title}</p>{" "}
          <p className="description">
            {details?.description.length > 190
              ? details?.description.slice(0, 120) + "..."
              : details?.description}
          </p>
          <p className="description-mobile">
            {details?.description.slice(0, 50) + "..."}
          </p>
          <p className="genres">
            {details?.genres?.map((item, ind) => (
              <span>
                {item.name} {ind + 1 !== details.genres.length ? "| " : ""}
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
      </div>
    </Container>
  );
};
export default BackgroundVideo;
