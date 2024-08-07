import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ListContainer = styled.div`
  margin: 26px 0;
  font-family: "Inter", sans-serif;

  .title {
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 18px;
  }

  @media (max-width: 540px) {
    margin: 20px 0;
    .title {
      font-size: 16px;
    }
  }
`;

export const Carousel = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    font-family: "FontAwesome";
    font-size: 40px;
    color: white;
    font-weight: 300;
    height: 100px;
  }
  .slick-prev:before {
    content: "\f104";
    position: relative;
    left: 8px;
  }
  .slick-next:before {
    content: "\f105";
    position: relative;
    right: -14px;
  }
  .slick-prev.slick-disabled:before,
  .slick-next.slick-disabled:before {
    opacity: 0.25;
    display: none;
  }
  & > button {
    opacity: 0;
    height: 100%;
    width: 2vw;
    z-index: 3;
  }
  &:hover {
    & > button {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  .slick-list {
    overflow: initial;
  }
`;

export const Wrap = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(2, 1fr);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  z-index: 2;

  div {
    font-size: 0.45rem;
    width: 94%;
    grid-row: 1/-1;
    grid-column: 1/-1;
    z-index: -1;
    display: none;

    h2,
    h3 {
      margin-bottom: 5px;
    }

    .grey {
      color: #c3c5c7;
      margin-bottom: 6px;
    }
  }

  img {
    display: block;
    width: 94%;
    padding-left: 1px;
    border-radius: 5px;
    grid-row: 1/-1;
    grid-column: 1/-1;
    z-index: -2;
  }

  &:hover {
    transform: scale(1.25);

    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      box-shadow: inset 0px -78px 18px 7px #1a2032;
      z-index: 2;
    }

    div {
      display: block;
      position: absolute;
      bottom: -3px;
      z-index: 3;
      padding: 8px;
    }

    img {
      width: 100%;
    }
  }
`;

export const MediaListContainer = styled.div`
  padding: 0 14px;
`;
