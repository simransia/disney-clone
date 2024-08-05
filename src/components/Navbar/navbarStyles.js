import styled from "styled-components";

export const Header = styled.div`
  display: none;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 5px 8px;

  img {
    width: 80px;
  }

  button {
    border: 1px solid orange;
    background-color: transparent;
    font-size: 12px;
    border-radius: 5px;
    padding: 5px 8px;
    color: orange;
  }

  @media (max-width: 640px) {
    display: flex;
  }
`;
