import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../utils/firebase";

const useSubscribeData = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  const [selectedPlan, setSelectedPlan] = useState("Super");

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };
  return { detailData, selectedPlan, handlePlanChange };
};

export default useSubscribeData;
