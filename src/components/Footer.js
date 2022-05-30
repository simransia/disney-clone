import React from 'react'
import styled from 'styled-components';
import { BsApple } from 'react-icons/bs';
import { RiFacebookFill, RiTwitterFill } from 'react-icons/ri'

function Footer() {
  return (
    <FootNote>
      <div className="first">
        <div className='links'> 
        <a href="/disneyplus">About Disney+ Hotstar</a>
        <a href="/disneyplus">Terms Of Use</a>
        <a href="/disneyplus">Privacy Policy</a>
        <a href="/disneyplus">FAQ</a>
        <a href="/disneyplus">Feedback</a>
        <a href="/disneyplus">Careers</a>
        </div>
        <p>© 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</p>
      </div>
     
      <div className="second">
        <p>Connect with us</p>
        <div className='inner-first'>
          <button><RiFacebookFill style={{ color: "white", fontSize: "1.6rem" }} /></button>
          <button><RiTwitterFill style={{ color: "white", fontSize: "1.6rem" }} /></button>
        </div>
      </div>

      <div className="third">
        <p className='hotstar'>Disney+ Hotstar App</p>
        <div className='inner-second'>
        <button>
          <img src="/images/play.png" />
          <div>
            <p>Get it on:</p>
            <h2>Google Play</h2>
          </div>
        </button>
        <br />
        <button> <BsApple style={{ color: "white", fontSize: "0.8rem" }} />
          <div>
            <p>Download on the</p>
            <h2>App Store</h2>
          </div>
        </button>
        </div>
      </div>
      
    </FootNote >
  )
};

const FootNote = styled.div`

margin-top:35px;
font-size:0.65rem;
display:flex;
justify-content:center;

.first{ 
 width:60%;
 margin-top:10px;

  a{
    margin-right:5px;
    margin-left:4px;
    margin-bottom:5px;
    float:left;

   @media (max-width:780px) {
     margin-right:10px;
    font-size:0.59rem;
   }
  }

  .links{
    width:80%;
  }

 p{
   clear:both;
   font-size:0.56rem;
   width:80%;
   margin-left:10px;;

   @media (max-width:780px) {
    font-size:0.6rem;
    }
  }
 
  @media (max-width:780px) {
    width:95vw;
    }
}

.second {
  width:20%;

  p{
    font-weight:bold;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    font-weight:bold;
    font-size:0.6rem;
  }

 .inner-first{
    display:flex;
    align-items:center;
    justify-content:center;

    @media (max-width:780px) {
      flex-direction:column;
     }
 }
  button{ 
    display:flex;
    align-items:center;
    justify-content:center;
    width:2rem;
    height:2rem;
    background-color:#192133;
    border:none;
    border-radius:5px;
    margin-left:8px;
    margin-bottom:8px;

  @media (max-width:780px) {
    height:1.7rem;
    width:1.5rem;
    font-size:0.2rem;
   }
  }
  @media (max-width:780px) {
    width:22%;
    margin-left:25px;
    float:left;
   }
}

.third{
  width:20%;
  
.hotstar{
  text-align:center;
   font-weight:bold;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
   font-size:0.6rem;s
}
  .inner-second{
    display:flex;
    align-items:center;
    justify-content:center;
    @media (max-width:780px) {
      flex-direction:column;
    }
  }

  button{ 
    display:flex;
    align-items:center;
    justify-content:center;
    width:6rem;
    height:2rem;
    background-color:#192133;
    font-size:0.4rem;
    color:white;
    border:none;
    border-radius:5px;
    margin-left:5px;
    
   p{
    margin-bottom:-6px;
    }

    img{
      width:0.8rem;
      
    }

    @media (max-width:780px) {
      height:1.7rem;
      width:4rem;
      font-size:0.3rem;
    }
   
  }

  @media (max-width:780px) {
    display:block;
    float:right;
    margin-right:80px;
  }
}
 
@media (max-width:780px) {
  display:block;
  float:left;
}


`

export default Footer