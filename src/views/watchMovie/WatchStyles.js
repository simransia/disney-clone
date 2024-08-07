import styled from "styled-components";

const Container = styled.section`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  cursor: pointer;
  position: relative;
  padding: 15px;
  display: flex;
  justify-content: space-evenly;
  height: 100vh;
  z-index: 1;

  :after {
    content: "";
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 15px;
    bottom: 20px;
    left: -10px;
    overflow: hidden;
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
  margin-top: 34vh;
  z-index: 2;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

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
    top: 45px;
    left: 45px;
    margin-left: 5px;
    border: none;
    font-size: 0.68rem;
    font-weight: bold;
  }

  .btn {
    position: absolute;
    top: 4px;
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
    width: 60rem;
    height: 40rem;
    margin-top: 15px;
    margin-bottom: 20px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;

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
      width: 50rem;
      margin-bottom: 10px;

      @media (max-width: 830px) {
        width: 40rem;
      }
      @media (max-width: 550px) {
        justify-content: center;
      }
    }
  }
  .movies {
    font-size: 12px;
    color: #1c69b6;

    @media (max-width: 550px) {
      font-size: 8px;
    }
  }

  .super-box,
  .premium-box,
  .premium-box-two {
    border: 1px solid #333;
    border-radius: 5px;
    padding-left: 15px;
    width: 18vw;
    text-align: left;

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
  }
  .current-plan {
    background: #1e2a48;
    border-bottom: 1px solid #1e2a48;
    opacity: unset;

    h4 {
      color: #febd57;
    }

    hr {
      visibility: hidden;
    }
  }
  .rupee {
    font-size: 18px;
    position: relative;
    top: -3px;
  }
  hr {
    border: none;
    height: 1px;
    color: #333;
    background-color: #333;
  }
  button {
    background-color: #1f80e0;
    font-size: 16px;
    border-radius: 4px;
    color: white;
    width: 50rem;
    border: none;
    height: 35px;
    margin: 20px;

    @media (max-width: 830px) {
      width: 40rem;
      height: 28px;
    }

    @media (max-width: 550px) {
      width: 22rem;
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
