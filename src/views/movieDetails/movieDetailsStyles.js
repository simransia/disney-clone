import Slider from "react-slick";
import styled from "styled-components";

export const Carousel = styled(Slider)`
  padding-top: 5px;

  .slick-prev:before,
  .slick-next:before {
    font-family: "FontAwesome";
    font-size: 60px;
    color: white;
    font-weight: normal;
  }
  .slick-prev:before {
    content: "\f104";
    position: relative;
    left: -8px;
  }
  .slick-next:before {
    content: "\f105";
    position: relative;
    right: -8px;
  }

  & > button {
    opacity: 0;
    height: 100%;
    width: 4vw;
    z-index: 3;
  }
  &:hover {
    & > button {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li before {
    &:before {
      font-size: 15px;
      color: rgb(150, 150, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
`;

export const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;

  a {
    border-radius: 6px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    position: relative;
    padding: 0 15px;
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 780px) {
      padding: 8px;
    }

    span {
      margin-top: 45px;
      margin-left: 45px;
      white-space: wrap;
      color: #ffffff;
      line-height: 1.7;
      z-index: 3;
      width: max-content;

      @media (max-width: 1280px) {
        margin-right: -165px;
      }

      @media (max-width: 1150px) {
        margin-top: 35px;
        margin-left: 20px;
        margin-right: -200px;
      }

      @media (max-width: 990px) {
        font-size: 13px;
        margin-left: 10px;
        margin-right: -190px;
      }
      @media (max-width: 885px) {
        font-size: 12px;
        margin-right: -175px;
      }
      @media (max-width: 780px) {
        display: none;
      }
    }
    p {
      color: #c3c5c7;
    }
    .sub-head {
      font-weight: bold;
      color: #9a9da2;
    }
  }
  img {
    display: block;
    margin-left: auto;
    max-width: 100%;
    width: 50rem;
    height: 31rem;
    position: relative;
    border-radius: 4px;

    @media (max-width: 1324px) {
      height: 29rem;
    }

    @media (max-width: 768px) {
      height: 20rem;
      margin: 0;
    }

    @media (max-width: 550px) {
      min-width: 98vw;
      padding: 0 17px;
      height: 15rem;
    }
  }

  a:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -10px;
    overflow: hidden;
    box-shadow: inset 620px 0 100px 0 #030b17;
    z-index: 2;

    @media (max-width: 1350px) {
      box-shadow: inset 540px 0 100px 0 #030b17;
    }
    @media (max-width: 1295px) {
      box-shadow: inset 520px 0 100px 0 #030b17;
    }
    @media (max-width: 1215px) {
      box-shadow: inset 470px 0 100px 0 #030b17;
    }
    @media (max-width: 1140px) {
      box-shadow: inset 400px 0 100px 0 #030b17;
    }
    @media (max-width: 1080px) {
      box-shadow: inset 310px 0 100px 0 #030b17;
    }
    @media (max-width: 965px) {
      box-shadow: inset 220px 0 100px 0 #030b17;
    }
    @media (max-width: 865px) {
      box-shadow: inset 170px 0 100px 0 #030b17;
    }
    @media (max-width: 780px) {
      display: none;
    }
  }
`;

export const Background = styled.div`
  background-color: #0c111b;
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  overflow-y: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);
  padding-left: 100px;

  @media (max-width: 640px) {
    padding-left: calc(3.5vw + 5px);
  }
`;
export const Container = styled.div`
  width: 95vw;
  margin-left: -2.4vw;

  .subscribe {
    font-size: 12px;
    color: #e5bb44;
    font-weight: 800;
    position: relative;
    top: 2vh;
  }

  a {
    box-shadow: none;
  }

  img {
    border-radius: 7px;
    min-width: 50rem;
    @media (max-width: 870px) {
      min-width: 40rem;
    }
    @media (max-width: 780px) {
      border-radius: 3px;
      min-width: 100vw;
      padding: 0px 0px;
      height: 20rem;
    }
    @media (max-width: 550px) {
      height: 15rem;
    }
  }

  .icons {
    z-index: 3;
    height: 60px;
    width: 50%;
    position: absolute;
    bottom: 35px;
    left: 15px;
    font-size: 25px;

    .inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 85%;
      margin: auto;

      .watch {
        display: grid;
        grid-template-columns: auto auto;
        column-gap: 10px;
        color: #ccced0;
        p {
          font-size: 16px;
          font-weight: bold;

          @media (max-width: 880px) {
            font-size: 14px;
            color: white;
          }
        }

        .watch-item {
          align-self: center;
        }
      }
      .grid-container {
        display: grid;
        grid-template-columns: auto auto;
        column-gap: 30px;

        .grid-item {
          justify-self: center;
        }
        p {
          font-size: 12px;
        }
        @media (max-width: 780px) {
          display: none;
        }
      }

      @media (max-width: 880px) {
        width: 95%;
      }
    }
    @media (max-width: 780px) {
      position: absolute;
      bottom: 3px;
      left: -11px;
      font-size: 20px;
      background-color: rgba(0, 0, 0, 0.2);
      width: 100vw;
    }
  }
`;
