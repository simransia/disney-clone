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
  padding-left: 120px;

  @media (max-width: 640px) {
    padding-left: calc(3.5vw + 5px);
  }
`;

export { Container, Content };
