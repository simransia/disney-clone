import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled, { ThemeConsumer } from 'styled-components'
import { selectUserPhoto, selectUserName, setUserLoginDetails, setSignOutState } from '../features/user/userSlice'
import { auth, provider } from '../firebase'
import {FaBars} from "react-icons/fa";

function Header(props) {
  const dispatch = useDispatch()
const navigate= useNavigate()
const username= useSelector(selectUserName);
const userphoto= useSelector(selectUserPhoto)

useEffect(()=>{
  auth.onAuthStateChanged( async(user)=>{
    if(user){
      setUser(user);
      navigate("/home");
    }
  })
}, [username])

const setUser=(user)=>{
  dispatch(
    setUserLoginDetails({
      name:user.displayName,
      email:user.email,
      photo:user.photoURL
    })
  )
}

  const handleAuth=()=>{
    if(!username){ 
    auth.signInWithPopup(provider).then(result=>{
      setUser(result.user);
    }).catch(error=>{
      alert(error.message);
    })
  }else{
       auth.signOut().then(()=>{
         dispatch(setSignOutState());
         navigate("/");
       }).catch((error)=>alert(error.message));
  }
  }


  return (
    <Nav>
      <div className="bar">
       <FaBars className="icon"/>
      <Logo>
        <img src="/images/logo.svg" alt="Disney" />
      </Logo>
      </div>
      <div className='navMenu'>
        <a href="/Tv">
          <span>TV</span>
        </a>
        <a href="/movies">
          <span>Movies</span>
        </a>
        <a href="/sports">
          <span>Sports</span>
        </a>
        <a href="/disney">
          <span>Disney+</span>
        </a>
        <a href="/kids">
          <img src="/images/kids.PNG" />
        </a>
      </div>
      {!username ?
      
      <Login onClick={handleAuth}>
        LOGIN
      </Login>: 
      <SignOut>
         <UserImage src={userphoto} alt={username}></UserImage>
         <DropDown>
           <span onClick={handleAuth}>Sign Out</span>
         </DropDown>
      </SignOut>
      }
    </Nav>
  )
}

const Nav = styled.nav`
   position:fixed;
   top:0;
   right:0;
   left:0;
   height:70px;
   background-color:#121926;
   display:flex;
   align-items:center;
   justify-content:space-between;
   padding:0 0 0 36px;
   z-index:3;

   .bar{
     display:flex;
     align-items:center;
   }
   .icon{
     margin-right: 10px;
     color:#A0A3A8;
   }

.navMenu{ 
height:100%;
font-weight:300;
font-size:14px;
margin-top:8px;
align-items:center;
display:flex;
flex-flow:row wrap;
position:relative;
margin-right:auto;
margin-left:25px;

a{
    display:flex;
    align-items:center;
    padding:0 12px;

    img{
      height:28px;
      width:38px;
      min-width:20px;
    }
    span{
     color:#A0A3A9;
     line-height:1.08;
     letter-spacing:0.5px;
     position:relative;

    &:before{
    background-color:rgb(249,249,249);
    border-radius:0px 0px 4px 4px;
    content:"";
    height:2px;
    opacity:0;
    position:absolute;
    right:0px;
    left:0px;
    bottom:-6px;
    transform-origin:left center;
    transform:scaleX(0);
    transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)0s;
    width:auto;
  }
 }
  
 &:hover{
   span:before{ 
    transform:scaleX(1);
    visibility:visible;
    opacity:1 !important;
    }
 }
}
@media (max-width: 768px) {
 opacity:0  
 
}
}
@media (max-width: 768px) {
  .icon:hover{
    color:red;
 } 
}
`;

const Logo = styled.a`
  width:80px;
  max-height:70px;
  font-size:0;
  display:inline-block;
  img{
    display:block;
    width:100%;
  }
`

const Login= styled.a`
cursor:pointer;
color:#A0A3A9;
margin-top:8px;
font-size:14px;
letter-spacing:0.3px;
padding-right:10px
`

const UserImage= styled.img`
border-radius:50%;
height:50px;

`

const DropDown=styled.div`
position:absolute;
top:60px;
right:10px;
background-color:rgb(19, 19, 19);
padding:5px;
border:1px solid rgba(151, 151, 151, 0.34);
opacity:0;

`

const SignOut=styled.div`
margin-right:20px;
z-index:2;
cursor:pointer;

&:hover{
  ${DropDown}{
    opacity:1;
    transition-duration:1s;
  }
}

`

export default Header