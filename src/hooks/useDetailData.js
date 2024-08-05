import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import * as Movie from "../utils/slices/genere/genereSlice";
import db from "../utils/firebase";
import { normalizeKeys } from "../utils/getNormalizedKeys";

const useDetailData = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  const [select, setSelect] = useState(() => () => {});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc.data(), "luminous");
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);

  const selectMovieType = {
    recommend: Movie.selectRecommend,
    new: Movie.selectNewDisney,
    women: Movie.selectWomen,
    hit: Movie.selectHitMovies,
    disney: Movie.selectDisneyJuniorSeries,
    animal: Movie.selectanimalsAndNature,
    mickey: Movie.selectMickeyAndFriends,
    junior: Movie.selectDisneyJuniorSeries,
  };

  useEffect(() => {
    const newSelect = selectMovieType[detailData.type] || (() => []); // Fallback selector that returns an empty array
    setSelect(() => newSelect);
  }, [detailData]);

  const movies = useSelector(select);

  const details = [detailData].map(normalizeKeys);

  const moviesList = movies?.map(normalizeKeys);

  console.log(moviesList, "movies", movies);

  return { movies: moviesList, detailData: details[0], id };
};

export default useDetailData;
