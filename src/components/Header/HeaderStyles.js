import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  background-color: #121926;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 36px;
  z-index: 5;

  .bar {
    display: flex;
    align-items: center;
  }
  .icon {
    margin-right: 10px;
    margin-left: -8px;
    margin-top: 5px;
    color: #a0a3a8;
    font-size: 20px;
  }

  .navMenu {
    height: 100%;
    font-weight: 300;
    font-size: 14px;
    margin-top: 8px;
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a {
      display: flex;
      align-items: center;
      padding: 0 12px;

      img {
        height: 28px;
        width: 38px;
        min-width: 20px;
      }
      span {
        color: #a0a3a9;
        line-height: 1.08;
        letter-spacing: 0.5px;
        position: relative;

        &:before {
          background-color: rgb(249, 249, 249);
          border-radius: 0px 0px 4px 4px;
          content: "";
          height: 2px;
          opacity: 0;
          position: absolute;
          right: 0px;
          left: 0px;
          bottom: -6px;
          transform-origin: left center;
          transform: scaleX(0);
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          width: auto;
        }
      }

      &:hover {
        span:before {
          transform: scaleX(1);
          visibility: visible;
          opacity: 1 !important;
        }
      }
    }
    @media (max-width: 768px) {
      opacity: 0;
    }
  }
  @media (max-width: 768px) {
    .icon:hover {
      color: red;
    }
  }
`;

const Logo = styled.a`
  width: 80px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const Login = styled.a`
  cursor: pointer;
  color: #a0a3a9;
  margin-top: 8px;
  font-size: 14px;
  letter-spacing: 0.3px;
  padding-right: 14px;
`;

const UserImage = styled.img`
  border-radius: 50%;
  height: 50px;
`;

const DropDown = styled.div`
  position: absolute;
  top: 60px;
  right: 10px;
  background-color: rgb(19, 19, 19);
  padding: 5px;
  border: 1px solid rgba(151, 151, 151, 0.34);
  opacity: 0;
`;

const SignOut = styled.div`
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

export { Nav, Logo, Login, SignOut, UserImage, DropDown };
