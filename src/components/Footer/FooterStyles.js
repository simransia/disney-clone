import styled from "styled-components";

export const FootNote = styled.div`
  margin-top: 35px;
  margin-bottom: 20px;
  font-size: 0.65rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-style: "Inter", sans-serif;

  .column {
    width: 25%;

    p:first-child {
      font-weight: 500;
      font-size: 16px;
      margin-bottom: 25px;
    }

    .links {
      font-size: 14px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 18px;
    }
    a,
    .copyright-text {
      color: #8f98b2;
      font-weight: 500;
      display: flex;
      align-items: center;
      /* justify-content: center; */
      gap: 4px;
    }
    /* .copyright-text{
      font-size: 16px;
    } */
    .additional-links,
    .copyright-text {
      font-size: 14px;
      display: flex;
      gap: 12px;
      margin-bottom: 8px;
    }

    @media (max-width: 1024px) {
      .additional-links,
      .copyright-text {
        font-size: 12px;
      }
    }

    @media (max-width: 785px) {
      width: 48%;
    }

    @media (max-width: 650px) {
      width: 100%;
    }
  }

  .fourth {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .inner-first {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;
    }

    .inner-second {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      @media (max-width: 780px) {
        flex-direction: column;
      }
    }

    button {
      display: flex;
      align-items: end;
      justify-content: center;
      background-color: #192133;
      /* font-size: 0.4rem; */
      padding: 6px 10px;
      gap: 5px;
      color: white;
      border: none;
      border-radius: 5px;
      margin-left: 5px;

      div {
        max-height: 100%;
        text-align: left;

        .subtext {
          margin-bottom: 2px;
          font-size: 10px;
        }

        h2 {
          font-size: 16px;
        }

        @media (max-width: 1024px) {
          .subtext {
            font-size: 6px;
          }
          h2 {
            font-size: 10px;
          }
        }
      }

      img,
      .apple-icon {
        width: 1.3rem;
      }

      @media (max-width: 1024px) {
        img,
        .apple-icon {
          width: 0.7rem;
        }
      }
    }
  }

  @media (max-width: 640px) {
    display: none;
  }
`;
