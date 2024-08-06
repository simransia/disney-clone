import React, { Fragment } from "react";
import CategoryList from "../../components/categoryList/categoryList";
import useAddCategories from "../../hooks/useAddCategoriesToStore";
import { useSelector } from "react-redux";
import {
  selectSports,
  selectGenres,
  selectLanguages,
  selectChannels,
} from "../../utils/slices/categories/categoriesSlice";
import { CategoryContainer } from "./categoryStyles";
import { Viewers } from "../../components";

const Categories = () => {
  useAddCategories();

  const channels = useSelector(selectChannels);
  const languages = useSelector(selectLanguages);
  const genres = useSelector(selectGenres);
  const sports = useSelector(selectSports);

  console.log(channels, "channels");

  return (
    <div className="parent-container">
      <CategoryContainer>
        <Viewers />
        <CategoryList category={languages} title="Popular Languages" />
        <CategoryList category={channels} title="Popular Channels" />
        <CategoryList category={genres} title="Popular Genres" />
        <CategoryList category={sports} title="Popular Sports" />
      </CategoryContainer>
    </div>
  );
};

export default Categories;
