import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { Carousel, ListContainer, Wrap } from "../../styles/globalStyle";

const CategoryList = ({ category, title }) => {
  let settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <ListContainer>
      <p className="title">{title}</p>
      <Carousel {...settings}>
        {category &&
          category.map((item, key) => <img src={item.imgURL} alt="" />)}
      </Carousel>
    </ListContainer>
  );
};

export default CategoryList;
