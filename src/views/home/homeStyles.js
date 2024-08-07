import styled from "styled-components";

const Container = styled.div`
  display: flex;

  .content-container {
    max-width: 100vw;
    width: 100vw;
    overflow-x: hidden;
    overflow-y: hidden;
    padding: 0 calc(1vw);
    padding-left: 80px;

    @media (max-width: 768px) {
      padding: 0 calc(2vw);
      padding-left: 60px;
    }

    @media (max-width: 640px) {
      padding: 6px;
      /* padding-top: 54px; */
    }
  }
`;

const Content = styled.div`
  position: relative;
  min-height: 100vh;
  display: block;
`;

const GenereListContainer = styled.div`
  position: relative;
  bottom: 290px;
  padding: 0 14px;

  @media (max-width: 1320px) {
    bottom: 270px;
  }

  @media (max-width: 1080px) {
    bottom: 260px;
  }

  @media (max-width: 975px) {
    bottom: 190px;
  }

  @media (max-width: 860px) {
    bottom: 150px;
  }

  @media (max-width: 768px) {
    bottom: 120px;
  }

  @media (max-width: 640px) {
    bottom: 150px;
  }

  @media (max-width: 500px) {
    bottom: 78px;
  }
`;

const VideoContainer = styled.div`
  position: relative;

  .card-container {
    width: 90%;
    border-radius: 4px;
  }

  .highlight {
    border: 2px solid white;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }

  .small-preview {
    width: 30%;
    position: absolute;
    top: 55%;
    right: 5%;

    @media (max-width: 1220px) {
      top: 50%;
    }

    @media (max-width: 845px) {
      top: 54%;
    }

    @media (max-width: 768px) {
      top: 52%;
    }

    @media (max-width: 540px) {
      top: 54%;
    }

    @media (max-width: 450px) {
      top: 55%;
    }
  }

  .card {
    margin: 0 4px;
    border-radius: 4px;
    height: 50px;
    overflow: hidden;
    cursor: pointer;

    @media (max-width: 1024px) {
      height: 40px;
    }

    @media (max-width: 768px) {
      height: 30px;
    }

    @media (max-width: 540px) {
      height: 20px;
    }
  }
`;

export { Container, Content, VideoContainer, GenereListContainer };
