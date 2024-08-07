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
      width: 85vw;
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
`;
