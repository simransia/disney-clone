import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 120vh;
  position: relative;
  right: calc(3.5vw + 45px);
  overflow: hidden;

  iframe {
    position: relative;
    /* right: calc(3.5vw); */
    /* top: 0;
    left: 0;
    right: 0; */
    bottom: 90px;
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
      to bottom right,
      rgba(15, 16, 20, 0.5),
      rgba(15, 16, 20, 0.5)
    );
  }
`;
