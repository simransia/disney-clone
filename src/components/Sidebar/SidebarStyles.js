import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 80px;
  background-color: #121926;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  z-index: 5;

  .navMenu {
    height: 100%;
    font-weight: 300;
    position: relative;

    .logo {
      margin-bottom: 40px;
    }

    .links {
      width: 100%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 36px;
    }

    a {
      display: flex;
      align-items: center;
      position: relative;

      svg {
        width: 22px;
        min-width: 20px;
        color: #808387;
        transition: transform 0.3s ease;
      }
      span {
        color: #808387;
        line-height: 1.08;
        letter-spacing: 0.5px;
        font-weight: semi-bold;
        position: absolute;
        width: max-content;
        left: 45px;
        font-size: 20px;
        transform: translateX(-60%); /* Start from left */
        opacity: 0; /* Initially invisible */
        visibility: hidden;
        transition: all 0.4s ease;
      }

      &:hover {
        svg,
        span {
          transform: scale(1.1);
          font-weight: bold;
          color: white;
        }
      }
    }

    .active {
      svg,
      span {
        font-weight: bold;
        color: white;
      }
    }

    &:before {
      content: "";
      position: absolute;
      background-color: #121926;
      top: 0;
      left: 0;
      right: 100%; /* Hide the background extension by default */
      bottom: 0;
      z-index: -1;
      transition: right 0.3s ease;
    }

    &:hover span {
      opacity: 1;
      visibility: visible;
      transform: translateX(0%);
    }

    &:hover {
      /* On hover, extend the background */
      &:before {
        content: "";
        position: absolute;
        box-shadow: 55px 50px 55px -5px #121926, 55px -50px 55px -5px #121926;
        top: 0;
        left: 0;
        right: -100%;
        bottom: 0;
        z-index: -1;
        transition: right 0.3s ease; /* Animate the background extension */
      }

      /* Keep the text visible on hover */
      span {
        opacity: 1;
        visibility: visible;
        transform: translateX(0%);
      }
    }
  }

  @media (max-width: 640px) {
    opacity: 0;
    display: hidden;
  }
`;

const Logo = styled.a`
  width: 100%;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  margin-top: 28px;
  img {
    display: block;
    width: 85%;
    margin: 0 auto;
  }
`;

export { Nav, Logo };
