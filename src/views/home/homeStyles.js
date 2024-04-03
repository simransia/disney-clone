import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Content = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  overflow-y: hidden;
  display: block;
  padding: 0 calc(3.5vw + 5px);
  padding-left: 120px;

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }

  @media (max-width: 640px) {
    padding-left: calc(3.5vw + 5px);
  }
`;

export { Container, Content };
