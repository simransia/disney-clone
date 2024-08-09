import styled from "styled-components";

export const ExploreContainer = styled.div`
  padding-top: 80px;

  .input-container {
    position: relative;
    width: max-content;
    margin: 0 auto;

    svg {
      position: absolute;
      font-size: 28px;
      color: gray;
      top: 50%;
      transform: translateY(-50%);
      left: 14px;
    }

    input {
      background-color: #252833;
      border: none;
      border-radius: 6px;
      padding: 18px;
      padding-left: 55px;
      font-size: 16px;
      width: 84vw;
      ::placeholder {
        color: gray;
      }
      color: white;
    }

    .gif {
      position: absolute;
      right: 16px;
      bottom: -4px;
    }

    @media (max-width: 640px) {
      input {
        font-size: 14px;
        width: 90vw;
        padding-left: 35px;
      }

      svg {
        width: 20px;
        left: 10px;
      }

      .gif {
        width: 40px;
        right: 0px;
      }
    }
  }
  .search-results__container {
    width: 84vw;
    margin: 0 auto;
    margin-top: 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
    gap: 20px;

    .result-item {
      width: calc(16.66% - 20px);
      margin-bottom: 16px;

      p {
        font-family: cursive;
        margin-bottom: 8px;
        text-align: center;
        cursor: pointer;
      }

      img {
        width: 100%;
        height: auto;
        border-radius: 8px;
        cursor: pointer;
      }

      .details {
        position: relative;

        p {
          position: absolute;
          bottom: 10px;
          margin: 0 2px;
          font-size: 13px;
          color: #c3c5c7;
          z-index: 20;
          display: none;
        }

        &:hover {
          scale: 1.05;
          margin-bottom: 5px;

          p {
            display: block;
          }
          &:after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border-radius: 6px;
            box-shadow: inset 0px -95px 18px 7px #1a2032;
            z-index: 2;
          }
        }

        @media (max-width: 640px) {
          p {
            font-size: 10px;
          }
        }
      }
    }

    /* .result-item:nth-child(4n){
      
    } */

    /* @media (max-width: 1024px) {
      padding: 0 20px;
      .result-item {
        width: calc(25% - 18px);

        p {
          font-size: 12px;
        }
      }
    } */

    @media (max-width: 1024px) {
      .result-item {
        width: calc(25% - 18px);

        p {
          font-size: 12px;
        }
      }
    }

    @media (max-width: 648px) {
      gap: 10px;

      .result-item {
        width: calc(25% - 8px);

        p {
          font-size: 11px;
        }
      }
    }
  }
`;
