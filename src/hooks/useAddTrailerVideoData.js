import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTrailer,
  selectTrailerDetails,
  setTrailer,
  setTrailerDetails,
} from "../utils/video/VideoSlice";

const useAddTrailerVideoData = (movieId) => {
  const dispatch = useDispatch();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMGMxMjEzN2YyMTIxNGEwNTljZTAzMTI2YjQ3MTdhMSIsInN1YiI6IjY2MTkyYTU3ZjlhYTQ3MDE3ZDM0OGM3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tyTcd6s8kLs1qWMgJw6rBg7Hr_B8GHfYSvMQOv7T5ec",
    },
  };

  const trailerVideo = useSelector(selectTrailer);
  const trailerVideoDetails = useSelector(selectTrailerDetails);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      options
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");

    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer, "2");
    dispatch(setTrailer({ trailerVideo: { ...trailer, movieId } }));
  };

  const getVideoData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
      options
    );
    const details = await data.json();
    dispatch(
      setTrailerDetails({
        trailerVideoDetails: {
          title: details.title,
          description: details.overview,
          tagLine: details.tagline,
          genres: details.genres,
          movieId,
        },
      })
    );
  };

  useEffect(() => {
    trailerVideo.filter((item) => item.movieId === movieId).length < 1 &&
      getMovieVideos();

    trailerVideoDetails.filter((item) => item.movieId === movieId).length < 1 &&
      getVideoData();
  }, [movieId]);

  return { trailerVideo, trailerVideoDetails };
};

export default useAddTrailerVideoData;
