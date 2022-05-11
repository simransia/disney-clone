import React from 'react';
import styled from "styled-components"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';


function ImageSlider(props) {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <div>
            <Carousel {...settings}>
                <Wrap><a>
                    <span>
                        <h2>The Ice Age Adventures of Buck Wild</h2>
                        <p className='sub-head'>English. Family - 2022</p>
                        <p>The hilarious escapades of everyone's favourite prehistoric
                             mammals Crash and Eddie continue, as they join pal Buck Wild
                              to take on dinosaurs of the Lost World.</p>
                    </span>
                    <img src="/images/slider-img-1.jfif" alt="" /></a></Wrap>
                <Wrap><a>
                    <span>
                        <h2>Shang-Chi and The Legend of The Ten Rings</h2>
                        <p className='sub-head'>Superhero - 2021</p>
                        <p>Shang-Chi, a martial arts master, must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.</p>
                    </span>
                    <img src="/images/slider-img-2.jfif" alt="" /></a></Wrap>
                <Wrap><a>
                    <span>
                        <h2>Encanto</h2>
                        <p className='sub-head'>Fantasy - 2021</p>
                        <p>When Mirabel, the only ordinary member of the Madrigal family, discovers the magic surrounding their home is in danger, she may be her family's last hope.</p>
                    </span>
                    <img src="/images/slider-img-3.jfif" alt="" /></a></Wrap>
                <Wrap><a>
                    <span>
                        <h2>The Book of Boba Fett</h2>
                        <p className='sub-head'>Star Wars Action</p>
                        <p>No longer just a hired gun, Boba Fett reinvents himself on Tatooine alongside Fennec Shand.</p>
                    </span>
                    <img src="/images/slider-img-4.png" alt="" /></a></Wrap>
                <Wrap><a>
                    <span>
                        <h2>Hawkeye</h2>
                        <p className='sub-head'>Marvel Superhero</p>
                        <p>Clint Barton/Hawkeye must team up with skilled archer

                            Kate Bishop to unravel a criminal conspiracy.</p>
                    </span>
                    <img src="/images/slider-img-6.jfif" alt="" /></a></Wrap>
                <Wrap><a>
                    <span>
                        <h2>Snowdrop</h2>
                        <p className='sub-head'>1 Season 3 Episodes Romance U/A 13+ Select Picks</p>
                        <p>NEW EPISODES EVERY WEDNESDAY AT 1:30 PM. An enduring love story of university students Yeong-ro and Soo-ho blooms amidst a dangerous political situation in Seoul. What will happen to their fate?</p>
                    </span>
                    <img src="/images/slider-img-5.jfif" alt="" /></a></Wrap>
            </Carousel>

        </div>
    );
};
const Carousel = styled(Slider)`


.slick-prev:before, .slick-next:before{
    font-family:'FontAwesome';
    font-size:60px;
    color:white;
    font-weight:normal;
  
}
.slick-prev:before{
    content:'\f104';
    position:relative;
    left:-8px
    
}
.slick-next:before{
    content:'\f105';
    position:relative;
    right:-8px
}

& > button{
    opacity:0;
    height:100%;
    width:4vw;
    z-index:3;
}
&:hover{
    & > button{ 
    opacity:1;
    transition:opacity 0.2s ease 0s;
}
}
ul li before{
    &:before{
        font-size:15px;
        color:rgb(150, 150, 171);
    }
}
li.slick-active button:before{
    color:white;
}
.slick-list{
    overflow:initial;
}
`;

const Wrap = styled.div`
border-radius: 4px;
cursor: pointer;


a {
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  position: relative;
  padding: 15px;
  display:flex;
  justify-content:space-evenly;
  

  span{
    
    margin-top:50px;
    margin-left:50px;
    white-space:wrap;
    color:#FFFFFF;
    line-height:1.8;
    z-index:3;
    width: max-content;
  

    @media (max-width:1180px) {
        margin-right:-100px;
       }
  
       @media (max-width:1050px) {
        margin-top:20px;
        margin-left:20px;
        margin-right:-130px;
       }

    @media (max-width:925px) {
        font-size:14px;
        margin-top:5px;
        margin-left:10px;
       
       }
       @media (max-width:850px) {
        font-size:12px;
       }
       @media (max-width:780px) {
        display:none;
        
       }
}
    p{
        color:#C3C5C7; 
    }
    .sub-head{
        font-weight:bold;
        color:#9A9DA2
    }
  }
  img {
    display:block;
    margin-left: auto;
    max-width: 100%;
    width: 50rem;
    height: 25rem; 
    position:relative;
    top:5px
  }
}
a:after {
    content: "";
    width: 100%;
    height: 95%;
    position: absolute;
    top:15px;
    bottom:20px
    left: -10px;
    overflow: hidden;
    box-shadow: inset 635px 0 100px 0 #030B17;
    z-index:2;

    @media (max-width: 133px) {
        box-shadow: inset 580px 0 100px 0 #030B17;
        
       }
     
       @media (max-width: 1295px) {
        box-shadow: inset 535px 0 100px 0 #030B17;
        
       }
       @media (max-width:1215px) {
        box-shadow: inset 485px 0 100px 0 #030B17;
        
       }

       @media (max-width:1140px) {
        box-shadow: inset 400px 0 100px 0 #030B17;
        
       }
       @media (max-width:1050px) {
        box-shadow: inset 320px 0 100px 0 #030B17;
        
       }
       @media (max-width:965px) {
        box-shadow: inset 225px 0 100px 0 #030B17;
        
       }
       @media (max-width: 780px) {
        display:none 
        
       }
  }

`

export default ImageSlider