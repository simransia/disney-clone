import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import db from '../firebase';
import { GiCheckMark } from 'react-icons/gi';
import { ImCross, ImArrowLeft2 } from 'react-icons/im';

const Watch = (props) => {
  
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });

  }, [id]);

  const handleSuperClick=()=>{
    document.querySelector('.super-box').classList.add('selected');
    document.querySelector('.super').classList.add('current-plan');
    document.querySelector('.premium-box-two').classList.remove('selected');
    document.querySelector('.premium-box').classList.remove('selected');
    document.querySelector('.premium').classList.remove('current-plan');
    document.querySelector('.plan').innerHTML = 'Continue with Super &gt;';
  }
  const handlePremiumClick=()=>{
    document.querySelector('.premium-box').classList.add('selected');
    document.querySelector('.premium').classList.add('current-plan');
    document.querySelector('.super-box').classList.remove('selected');
    document.querySelector('.premium-box-two').classList.remove('selected');
    document.querySelector('.super').classList.remove('current-plan');
    document.querySelector('.plan').innerHTML = 'Continue with Premium &gt;';
  }
 const handlePremium2Click=()=>{
    document.querySelector('.premium-box-two').classList.add('selected');
    document.querySelector('.premium').classList.add('current-plan');
    document.querySelector('.super-box').classList.remove('selected');
    document.querySelector('.premium-box').classList.remove('selected');
    document.querySelector('.super').classList.remove('current-plan');
    document.querySelector('.plan').innerHTML = 'Continue with Premium &gt;';
  }

  return (
    <Container>
      <Content>
        <Subscribe> 
        <ImArrowLeft2 className='arrow' style={{fontSize:"1.8rem"}} />
         <img className="logo" src="/images/logo.svg" alt="Disney" />
         <p className='text'>Select Plan <span className='grey'>&gt; Log in &gt; Pay</span> </p>
          <img className="card" src={detailData.cardImg} />
          <button className='btn'>Log In</button>
          <span className='subscribe'>Subscribe to watch</span>
          <div className='subs'>
            <div className='first'>
              <div className='all'>
                <h4> All content </h4>
                <p className='movies'>Movies, live sports, TV, Specials</p>
                <hr />
                <p>Watch on TV or Laptop</p>
                <hr />
                <p>Ads free movies and shows (except sports)</p>
                <hr />
                <p>Number of devices that can be logged in</p>
                <hr />
                <p>Max video quality</p>
                <hr />
                <p>Max audio quality</p>
              </div>
              <div className='super current-plan'>
                <h4> Super </h4>
                <p><GiCheckMark /></p>
                <hr />
                <p><GiCheckMark /></p>
                <hr />
                <p><ImCross /></p>
                <hr />
                <p>2</p>
                <hr />
                <p>Full HD (1080p)</p>
                <hr />
                <p>Dolby 5.1</p>
              </div>
              <div className="premium">
               <h4> Premium </h4>
                <p><GiCheckMark /></p>
                <hr />
                <p><GiCheckMark /></p>
                <hr />
                <p><GiCheckMark /></p>
                <hr />
                <p>4</p>
                <hr />
                <p>4K (2160p)</p>
                <hr />
                <p>Dolby 5.1</p>
              </div>
            </div>
            
            <div className='second'>
             <div className='super-box selected' onClick={handleSuperClick}>
                <h3>Super</h3>
                <h2><span className="rupee">₹</span>899/Year</h2>
              </div>
              <div className='premium-box' onClick={handlePremiumClick}>
                <h3>Premium</h3>
                <h2><span className="rupee">₹</span>1499/Year</h2>
              </div>
              <div className='premium-box-two' onClick={handlePremium2Click}>
                <h3>Premium</h3>
                <h2><span className="rupee">₹</span>299/Year</h2>
              </div>
            </div>
            <button className="plan">Continue with Super &gt;</button>
          </div>

        </Subscribe>
       
        <BgImage/> 
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;

`;

const Content = styled.div`
cursor: pointer;
position:relative;
padding: 15px;
display:flex;
justify-content:space-evenly;
height:100vh;
z-index:1;

:after{
  content: "";
  width: 100%;
  height: 100vh;
  position: absolute;
  top:15px;
  bottom:20px
  left: -10px;
  overflow: hidden;
  box-shadow: inset 0 -460px 100px 0 #030B17;
}

`;

const BgImage = styled.div`
  height:70%;
  background-position:center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top:1px;
  right: 0;
  left: 0;
  z-index: -1;
  margin:auto;
  background:url(/images/subscribe.png) repeat-y 0/100% auto ;
  animation: ani 110s linear infinite ;
  opacity:0.3;

  @keyframes ani{
    0%{background-position: 0 100vh;}
    100%{background-position:0 0;}
  }
  
  @media (max-width:760px) {
    background:url(/images/subscribe.png) repeat-y;
   }

`;

const Subscribe = styled.div`
   margin-top:34vh;
   z-index:2;
   opacity:1;
   display:flex;
   flex-direction:column;
   justify-content:center;

   .card{
    margin:auto;
    width:8vw;
    border:1.5px solid white;
    border-radius:4px;
    margin-bottom:15px;
    margin-top:5px;

    @media (max-width:550px) {
      width:18vw;
     }
   }

   .logo{
    width:5rem;
    position:absolute;
    top:10px;
    left:50px;
    margin-left:5px;
    border:none;
    
  }
  .grey{
    color:#9D9FA3;
  }
  .arrow{
    position:absolute;
    top:20px;
    left:15px;
    color:#9D9FA3;
  }
  .text{
    position:absolute;
    top:45px;
    left:45px;
    margin-left:5px;
    border:none;
    font-size:0.68rem;
    font-weight:bold;
  }

  .btn{
    position:absolute;
    top:4px;
    right:25px;
    width:5rem;
  }
   .subscribe{
     font-family:sans-serif;
     font-size:1.7rem;
     text-shadow: 1px 1px black, -1px -1px black;
   }
   .subs{
     background-color:#182031;
     width:60rem;
     height:40rem;
     margin-top:15px;
     margin-bottom:20px;
     border-radius:7px;
     display:flex;
     align-items:center;
     justify-content:center;
     flex-direction:column;
     padding:30px;

    .first{
     display:flex;
     align-items:center;
     justify-content:center;
     width:50rem;
     margin-bottom:10px;
    }

    .second{
      display:flex;
      align-items:center;
      justify-content:space-between;
      width:50rem;
      margin-bottom:10px;

      @media (max-width:830px) {
        width:40rem;
       
       }
       @media (max-width:550px) {
        justify-content:center;
       }
    }
  }
    .movies{
      font-size:12px;
      color:#1C69B6;

      @media (max-width:550px) {
        font-size:8px;
       
       }
    }
  
     .super-box, .premium-box, .premium-box-two{
       border: 1px solid #333;
       border-radius:5px;
       padding-left:15px;
       width:18vw;
       text-align:left;

       @media (max-width:768px) {
        margin:0 10px;
        width:20vw;
       font-size:2vw;
      
      .rupee{
        font-size:12px;
        position:relative;
        top:0px;
      }

       h2{
        font-size:0.6rem;
       }
       }
     }
    
   .selected{
      background-color:#174373;
      border:1px solid #1F80E0;
     }
   .all{
      text-align:left;
      width:40vw;
    }

   .premium, .super{
     width:14vw;
    }
    .current-plan{
      background: #1e2a48;
      border-bottom: 1px solid #1e2a48;
      opacity: unset;
      
      h4{
       color:#FEBD57;
      }

      hr{
        visibility:hidden;
      }
    }
    .rupee{
      font-size:18px;
      position:relative;
      top:-3px;
    }
   hr {
    border: none;
    height: 1px;
    color: #333; 
    background-color: #333;
  }
  button{
    background-color:#1F80E0;
    font-size:16px;
    border-radius:4px;
    color:white;
    width:50rem;
    border:none;
    height:35px;
    margin:20px;

  
    @media (max-width:830px) {
      width:40rem;
      height:28px;
     }

    @media (max-width:550px) {
      width:22rem;
      height:25px;
      font-size:12px;
     }
  } 
  
  @media (max-width:768px) {
    font-size:10px;
    margin-top:10vh;
   }
`;

export default Watch;