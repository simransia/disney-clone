import styled from "styled-components";

const Container = styled.section`
  /* overflow-x: hidden; */
  max-width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  /* height: 100vh; */
  /* padding-left: 80px; */
`;

const Content = styled.div`
  cursor: pointer;
  position: relative;
  padding: 15px;
  display: flex;
  justify-content: space-evenly;
  /* height: 100vh; */
  z-index: 1;

  :after {
    content: "";
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0px;
    bottom: 20px;
    left: -10px;
    /* overflow: hidden; */
    box-shadow: inset 0 -460px 100px 0 #030b17;
  }
`;

const BgImage = styled.div`
  height: 70%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 1px;
  right: 0;
  left: 0;
  z-index: -1;
  margin: auto;
  background: url(/images/subscribe.png) repeat-y 0/100% auto;
  animation: ani 110s linear infinite;
  opacity: 0.3;

  @keyframes ani {
    0% {
      background-position: 0 100vh;
    }
    100% {
      background-position: 0 0;
    }
  }

  @media (max-width: 760px) {
    background: url(/images/subscribe.png) repeat-y;
  }
`;

const Subscribe = styled.div`
  margin-top: 20vh;
  z-index: 2;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;

  .card {
    margin: auto;
    width: 8vw;
    border: 1.5px solid white;
    border-radius: 4px;
    margin-bottom: 15px;
    margin-top: 5px;

    @media (max-width: 550px) {
      width: 18vw;
    }
  }

  .logo {
    width: 5rem;
    position: absolute;
    top: 10px;
    left: 50px;
    margin-left: 5px;
    border: none;
  }
  .grey {
    color: #9d9fa3;
  }
  .arrow {
    position: absolute;
    top: 20px;
    left: 15px;
    color: #9d9fa3;
  }
  .text {
    position: absolute;
    top: 54px;
    left: 45px;
    margin-left: 5px;
    border: none;
    font-size: 0.68rem;
    font-weight: bold;
  }

  .login-btn {
    position: absolute;
    top: 20px;
    right: 25px;
    width: 5rem;
  }
  .subscribe {
    font-family: sans-serif;
    font-size: 1.7rem;
    text-shadow: 1px 1px black, -1px -1px black;
  }
  .subs {
    background-color: #182031;
    width: 100%;
    margin: 0 auto;
    /* height: rem; */
    margin-top: 15px;
    margin-bottom: 20px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 35px 30px 25px 30px;

    .first {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50rem;
      margin-bottom: 10px;
    }

    .second {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 20px;

      @media (max-width: 550px) {
        justify-content: center;
      }
    }
  }
  .movies {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    span {
      display: block;
      font-size: 12px;
      color: #1c69b6;

      @media (max-width: 550px) {
        font-size: 8px;
      }
    }
  }

  .super-box,
  .premium-box,
  .premium-box-two {
    border: 1px solid #333;
    border-radius: 5px;
    padding: 8px 0;
    padding-left: 15px;
    width: 18vw;
    text-align: left;
    margin-right: 10px;

    @media (max-width: 768px) {
      margin: 0 10px;
      width: 20vw;
      font-size: 2vw;

      .rupee {
        font-size: 12px;
        position: relative;
        top: 0px;
      }

      h2 {
        font-size: 0.6rem;
      }
    }
  }

  p {
    /* padding: 10px 0; */
    border-bottom: 1px solid #333;
    display: flex;
    align-items: center;
    height: 45px;
    min-height: 45px;

    .cross {
      font-size: 20px;
    }
  }

  .selected {
    background-color: #174373;
    border: 1px solid #1f80e0;
  }
  .all {
    text-align: left;
    width: 40vw;
  }

  .premium,
  .super {
    width: 14vw;
    padding: 10px 0;
    position: relative;
    bottom: 14px;
    border-radius: 6px;

    h4 {
      margin-bottom: 10px;
    }

    p {
      justify-content: center;
    }
  }

  .current-plan {
    background: #1e2a48;
    border-bottom: 1px solid #1e2a48;
    opacity: unset;

    h4 {
      color: #febd57;
    }

    p {
      border-bottom: none;
    }
  }
  .rupee {
    font-size: 18px;
    position: relative;
    top: -3px;
  }

  button {
    background-color: #1f80e0;
    font-size: 16px;
    border-radius: 4px;
    color: white;
    width: 100%;
    border: none;
    height: 35px;

    @media (max-width: 830px) {
      height: 28px;
    }

    @media (max-width: 550px) {
      height: 25px;
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    font-size: 10px;
    margin-top: 10vh;
  }
`;

export { Container, Content, Subscribe, BgImage };
