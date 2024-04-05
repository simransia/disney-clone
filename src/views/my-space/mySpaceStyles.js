import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;

  p:first-of-type {
    margin-top: 30px;
    font-size: 24px;
  }

  p {
    margin-top: 18px;
  }

  button {
    background-image: linear-gradient(to right, #0957e1, #072b9a);
    color: white;
    border: none;
    font-size: 16px;
    font-weight: bold;
    padding: 16px;
    width: 25%;
    border-radius: 5px;
    margin-top: 60px;
  }
`;

export const Login = styled.a`
  cursor: pointer;
  color: #a0a3a9;
  margin-top: 8px;
  font-size: 14px;
  letter-spacing: 0.3px;
  padding-right: 14px;
`;

export const UserImage = styled.img`
  border-radius: 50%;
  height: 50px;
`;

export const DropDown = styled.div`
  position: absolute;
  top: 60px;
  right: 10px;
  background-color: rgb(19, 19, 19);
  padding: 5px;
  border: 1px solid rgba(151, 151, 151, 0.34);
  opacity: 0;
`;

export const SignOut = styled.div`
  margin-right: 20px;
  z-index: 2;
  cursor: pointer;

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
