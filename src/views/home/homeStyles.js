import styled from "styled-components";

const Container = styled.div`
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
overflow-y: hidden;
display: block;
top: 72px;
padding: 0 calc(3.5vw + 5px);


&:after {
  background: url("/images/home-background.png") center center / cover no-repeat fixed;
  content: "";
  position: absolute;
  inset: 0px;
  opacity: 1;
  z-index: -1;
 
`;

export { Container };