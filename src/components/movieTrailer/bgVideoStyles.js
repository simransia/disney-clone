import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  /* height: 120vh; */
  position: relative;
  right: calc(3.5vw + 40px);
  overflow: hidden;

  iframe {
    position: relative;
    /* right: calc(3.5vw); */
    /* top: 0;
    left: 0;
    right: 0; */
    bottom: 110px;
    width: 100%;
    /* height: 100vh; */
    aspect-ratio: 16/9;
    outline: none;
    border: none;

    @media (max-width: 945px) {
      bottom: 65px;
    }

    @media (max-width: 853px) {
      bottom: 60px;
    }
    @media (max-width: 768px) {
      bottom: 50px;
    }
    @media (max-width: 640px) {
      bottom: 40px;
    }
    @media (max-width: 500px) {
      bottom: 27px;
    }
  }

  .loading-image {
    width: 100%;
    height: 100%;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
      to bottom right,
      rgba(15, 16, 20, 0.5),
      rgba(15, 16, 20, 0.5)
    );
  }

  .video-details {
    margin-left: 10%;
    margin-top: 6%;
    font-family: "Inter", sans-serif;
    max-width: 40%;

    .title {
      font-size: 50px;
      font-weight: 900;
      margin-bottom: 24px;
    }

    .description {
      font-size: 14px;
      margin-bottom: 18px;
    }

    .description-mobile {
      display: none;
    }

    .genres {
      margin-bottom: 45px;
    }

    .btn-container {
      display: flex;
      gap: 12px;
    }

    button {
      background-color: rgba(81, 88, 91, 0.5);
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 17px;
      font-weight: 600;
      padding: 12px 0px;
      gap: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    button:first-child {
      width: 70%;
    }
    button:nth-child(2) {
      width: 12%;
    }

    .small-preview {
      position: absolute;
      bottom: 40px;
      right: 10%;
    }

    @media (max-width: 1160px) {
      margin-left: 12%;

      .title {
        font-size: 40px;
      }

      .description {
        font-size: 12px;
      }

      .genres {
        font-size: 12px;
        margin-bottom: 25px;
      }

      button {
        font-size: 14px;
        padding: 8px 0;
      }
    }
    @media (max-width: 800px) {
      margin-left: 14%;

      .genres {
        margin-bottom: 18px;
      }

      .title {
        font-size: 30px;
      }
    }

    @media (max-width: 640px) {
      margin-left: 7%;

      .title {
        font-size: 18px;
        margin-bottom: 10px;
      }

      .description {
        font-size: 10px;
        margin-bottom: 8px;
      }

      .genres {
        font-size: 10px;
        margin-bottom: 8px;
      }

      button {
        font-size: 12px;
        padding: 8px 5px;

        svg {
          width: 8px;
        }
      }

      button:first-child {
        width: 65%;
      }
      button:nth-child(2) {
        width: 15%;
      }
    }

    @media (max-width: 640px) {
      max-width: 48%;
      margin-top: 5%;

      .title {
        font-size: 16px;
        margin-bottom: 8px;
      }

      .description {
        display: none;
      }

      .description-mobile {
        display: block;
        font-size: 10px;
        margin-bottom: 10px;
      }

      .genres {
        font-size: 10px;
        margin-bottom: 8px;
      }

      button {
        font-size: 10px;
        padding: 5px;

        svg {
          width: 8px;
        }
      }

      button:first-child {
        width: 60%;
      }
      button:nth-child(2) {
        width: 20%;
      }
    }
  }

  @media (max-width: 640px) {
    right: 0px;
  }
`;
