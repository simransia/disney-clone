import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  font-family: "Inter", sans-serif;
  /* backdrop-filter: blur(60px); */

  img {
    height: 80vh;
    width: 100%;
  }

  .content {
    position: absolute;
    width: 40%;
    top: 18%;
    left: 8%;
    font-family: "Inter", sans-serif;
    backdrop-filter: blur(1px);

    .title {
      font-size: 40px;
      font-weight: 700;
      letter-spacing: 5px;
      margin-bottom: 35px;
    }

    .description {
      margin-bottom: 24px;
    }

    .description-mobile {
      display: none;
    }

    .genres {
      margin-bottom: 40px;
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
    }

    button:first-child {
      width: 70%;
    }
    button:nth-child(2) {
      width: 12%;
    }
  }

  .content {
    @media (max-width: 1024px) {
      top: 18%;

      .title {
        font-size: 30px;
        margin-bottom: 28px;
      }

      .description {
        font-size: 15px;
      }

      .genres {
        margin-bottom: 20px;
        font-size: 15px;
      }
    }

    @media (max-width: 860px) {
      width: 46%;
      top: 14%;

      .title {
        font-size: 20px;
        margin-bottom: 18px;
      }

      .description {
        display: none;
      }

      .description-mobile {
        display: block;
        margin-bottom: 16px;
        font-size: 12px;
      }

      .genres {
        margin-bottom: 18px;
        font-size: 12px;
      }

      button {
        font-size: 10px;
        padding: 8px;

        svg {
          width: 10px;
        }
      }
    }

    @media (max-width: 640px) {
      width: 50%;

      .title {
        font-size: 18px;
        margin-bottom: 12px;
      }

      .description-mobile {
        display: block;
        margin-bottom: 12px;
      }

      .genres {
        margin-bottom: 12px;
        font-size: 10px;
      }

      button {
        font-size: 10px;
        padding: 6px;

        svg {
          width: 10px;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    img {
      height: 70vh;
    }
  }

  @media (max-width: 800px) {
    img {
      height: 50vh;
    }
  }

  @media (max-width: 640px) {
    img {
      height: 28vh;
    }
  }
`;
