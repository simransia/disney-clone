import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);
  padding-left: 95px;

  @media (max-width: 768px) {
    padding: 0 calc(6vw + 5px);
  }

  @media (max-width: 640px) {
    padding: 6px;
  }
`;

const GenereListContainer = styled.div`
  position: relative;
  bottom: 270px;
  padding: 0 14px;

  @media (max-width: 1080px) {
    bottom: 230px;
  }

  @media (max-width: 945px) {
    bottom: 140px;
  }

  @media (max-width: 768px) {
    bottom: 80px;
  }
`;

const VideoContainer = styled.div`
  position: relative;

  .card-container {
    width: 90%;
    border-radius: 4px;
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

    @media (max-width: 945px) {
      top: 54%;
    }

    @media (max-width: 768px) {
      top: 52%;
    }

    @media (max-width: 540px) {
      top: 54%;
    }
  }
`;

export { Container, Content, VideoContainer, GenereListContainer };
