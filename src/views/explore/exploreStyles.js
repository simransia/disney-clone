import styled from "styled-components";

export const ExploreContainer = styled.div`
  padding-top: 30px;

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
      width: 85vw;
    }
  }
`;
