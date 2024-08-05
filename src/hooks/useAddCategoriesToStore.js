import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../utils/firebase";
import { setCategory } from "../utils/slices/categories/categoriesSlice";
import { selectUserName } from "../utils/slices/user/userSlice";

const useAddDataToStore = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    const unsubscribe = db.collection("categories").onSnapshot((snapshot) => {
      const initialCategories = {
        languages: [],
        channels: [],
        sports: [],
        genres: [],
      };

      const newCategories = snapshot.docs.reduce((acc, doc) => {
        const docData = doc.data();
        // const normalizedDocData = normalizeKeys(docData);
        const newEntry = { id: doc.id, ...docData };

        const type = docData.type?.trim();

        console.log(type, docData); // Maps 'type' to your state keys

        if (type) {
          acc[type] = [...acc[type], newEntry];
        }

        return acc;
      }, initialCategories); // Use initialCategories as the starting point for accumulation.

      dispatch(setCategory(newCategories));
    });

    return () => unsubscribe();
  }, [userName]);
};

export default useAddDataToStore;
