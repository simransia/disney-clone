import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../utils/firebase";
import { setGenere } from "../utils/slices/genere/genereSlice";
import { selectUserName } from "../utils/slices/user/userSlice";

const useAddDataToStore = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  const typeToCategoryKey = (type) => {
    const typeMap = {
      recommend: "recommend",
      new: "newToDisney",
      women: "women",
      hit: "hitMovie",
      disney: "disneyOriginal",
      Animal: "animalsAndNature",
      mickey: "mickeyAndFriend",
      junior: "disneyJuniorSeries",
    };
    return typeMap[type] || null;
  };

  useEffect(() => {
    const normalizeKeys = (data) => {
      const normalizedData = {};
      for (const key in data) {
        const normalizedKey = key.replace(/\s+/g, ""); // Example normalization: remove spaces and convert to lower case
        normalizedData[normalizedKey] = data[key];
      }
      return normalizedData;
    };

    const unsubscribe = db.collection("movies").onSnapshot((snapshot) => {
      const initialCategories = {
        recommend: [],
        newToDisney: [],
        women: [],
        hitMovie: [],
        disneyOriginal: [],
        animalsAndNature: [],
        mickeyAndFriend: [],
        disneyJuniorSeries: [],
      };

      const newCategories = snapshot.docs.reduce((acc, doc) => {
        const docData = doc.data();
        const normalizedDocData = normalizeKeys(docData);
        const newEntry = { id: doc.id, ...normalizedDocData };

        const type = normalizedDocData.type?.trim();
        const categoryKey = typeToCategoryKey(type);

        console.log(type, normalizedDocData); // Maps 'type' to your state keys

        if (categoryKey) {
          acc[categoryKey] = [...acc[categoryKey], newEntry];
        }

        return acc;
      }, initialCategories); // Use initialCategories as the starting point for accumulation.

      dispatch(setGenere(newCategories));
    });

    return () => unsubscribe();
  }, [userName]);
};

export default useAddDataToStore;
