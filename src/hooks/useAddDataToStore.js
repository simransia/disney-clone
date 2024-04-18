import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../utils/firebase";
import { setGenere } from "../utils/genere/genereSlice";
import { selectUserName } from "../utils/user/userSlice";

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
      animal: "animalsAndNature",
      mickey: "mickeyAndFriend",
      junior: "disneyJuniorSeries",
    };
    return typeMap[type] || null;
  };
  useEffect(() => {
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
        const newEntry = { id: doc.id, ...doc.data() };

        const type = doc.data().type;
        const categoryKey = typeToCategoryKey(type); // Maps 'type' to your state keys

        if (categoryKey) {
          acc[categoryKey] = [...acc[categoryKey], newEntry];
        }

        return acc;
      }, initialCategories); // Use initialCategories as the starting point for accumulation.

      dispatch(setGenere(newCategories));
    });

    return () => unsubscribe();
  }, [dispatch, userName]);
};

export default useAddDataToStore;
