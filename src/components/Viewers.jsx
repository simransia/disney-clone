import React from 'react';
import styled from "styled-components"

function Viewers() {
  return (
    <Container>
        <Wrap>
        <img src="/images/viewers-disney.png" alt="" />
        <video autoPlay={true} muted={true} loop={true} playsInline={true}>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="" />
        <video autoPlay={true} muted={true} loop={true} playsInline={true}>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="" />
        <video autoPlay={true} muted={true} loop={true} playsInline={true}>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="" />
        <video autoPlay={true} muted={true} loop={true} playsInline={true}>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="" />
        <video autoPlay={true} muted={true} loop={true} playsInline={true}>
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>
    </Container>
  )
};

const Container=styled.div`
 margin-top:30px;
 padding:30px 0px 26px;
 display:grid;
 grid-gap:25px;
 gap:25px;
 grid-template-columns:repeat(5, minmax(0, 1fr));

 @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
`;

const Wrap=styled.div`
position: relative;

border-radius: 10px;
background-color:#24314C;
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

img{
    height:100%;
    width:100%;
    position:absolute;
   
}

video{
    width: 100%;
    height: 100%;
    opacity:0;
   
    border-radius: 10px;
}
&:hover {
    transform: scale(1.10);
 
    video {
      opacity: 1;
    }
  }
`;

export default Viewers