import React from "react";
import useAddTrailerVideoData from "../../hooks/useAddTrailerVideoData";
import { Container } from "./bgVideoStyles";

const BackgroundVideo = ({ movieId }) => {
  const { trailerVideo } = useAddTrailerVideoData(movieId);

  console.log(trailerVideo, "heree");

  return (
    <Container className="">
      <iframe
        className=""
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1&loop=1&playlist=" +
          trailerVideo?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="overlay"></div>
    </Container>
  );
};
export default BackgroundVideo;

// return (
//   <div className="w-screen">
//     <iframe
//       className="w-screen aspect-video"
//       src={
//         "https://www.youtube.com/embed/" +
//         trailerVideo?.key +
//         "?&autoplay=1&mute=1"
//       }
//       title="YouTube video player"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//     ></iframe>
//   </div>
// );
