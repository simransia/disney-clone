import styled from "styled-components";

export const Container = styled.div`
  font-family: "Inter", sans-serif;
  background-image: linear-gradient(to bottom, #091731, #000000);
  width: 100vw;
  position: absolute;
  left: -90px;

  @media (max-width: 640px) {
    left: -4px;
    right: -4px;
  }

  .content {
    background-image: url("https://www.hotstar.com/assets-x/web/assets-ui-lib/images/stars.9c90b28001575d3d107b.svg");
    background-size: cover; /* Ensures the image covers the entire background */
    background-position: center; /* Centers the image */
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    padding-top: 50px;
    padding-left: 110px;

    @media (max-width: 640px) {
      padding: 10px;
      padding-right: 20px;
    }
  }

  p:first-of-type {
    margin-top: 30px;
    font-size: 24px;
    margin-bottom: 20px;
  }

  .sub-text {
    margin-bottom: 30px;
    text-align: center;
  }

  .gradient-text {
    background: linear-gradient(
      90.77deg,
      #e5bb44 5.63%,
      #fde8a6 53.07%,
      #e5bc45 101.97%
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size: 20px;
    font-weight: 600;
  }

  button {
    background-color: transparent;
    color: white;
    border: none;
    font-size: 16px;
    font-weight: bold;
    padding: 16px;
    width: 25%;
    border-radius: 5px;
    cursor: pointer;

    @media (max-width: 768px) {
      padding: 8px;
      font-size: 14px;
    }
  }

  .blue-btn {
    background-image: linear-gradient(to right, #0957e1, #072b9a);
  }

  .edit-btn {
    width: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 18px;
    gap: 8px;
  }

  .edit-icon {
    font-size: 20px;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    align-items: center;
    padding-bottom: 30px;
  }

  .row:first-child {
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }

  .action-btn-container {
    display: flex;
    width: 50%;
    justify-content: end;
    gap: 20px;

    button {
      width: 40%;
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  .sub-heading {
    margin-bottom: 16px;
    font-size: 12px;
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
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgb(19, 19, 19);
  padding: 5px;
  border: 1px solid rgba(151, 151, 151, 0.34);
  opacity: 0;

  @media (max-width: 640px) {
    width: 70%;
    text-align: center;
    top: 40px;
  }
`;

export const SignOut = styled.div`
  width: 40%;
  z-index: 2;
  cursor: pointer;
  position: relative;

  button {
    background-color: rgba(255, 255, 255, 0.05);
    min-width: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
