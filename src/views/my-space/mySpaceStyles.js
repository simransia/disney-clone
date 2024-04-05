import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;

  button {
    background-image: linear-gradient(to right, #0957e1, #072b9a);
    color: white;
    border: none;
    font-size: 16px;
    font-weight: bold;
    padding: 16px;
    width: 25%;
    border-radius: 5px;
  }
`;
