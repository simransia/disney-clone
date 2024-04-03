import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectUserPhoto,
  selectUserName,
  setUserLoginDetails,
  setSignOutState,
} from "../../utils/user/userSlice";
import { auth, provider } from "../../utils/firebase";

import {
  Nav,
  Logo,
  Login,
  SignOut,
  UserImage,
  DropDown,
} from "./SidebarStyles";
import {
  CircleUser,
  Clapperboard,
  Eclipse,
  Home,
  LayoutTemplate,
  RadioIcon,
  Search,
  Tv,
} from "lucide-react";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector(selectUserName);
  const userphoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/");
      }
    });
  }, [username]);

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const handleAuth = () => {
    if (!username) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((error) => alert(error.message));
    }
  };

  return (
    <Nav>
      <div className="navMenu">
        <div className="logo">
          <Logo>
            <img src="/images/logo.svg" alt="Disney" />
          </Logo>
        </div>
        <a href="/">
          <CircleUser />
          <span>My Space</span>
        </a>
        <a href="/">
          <Search /> <span>Search</span>
        </a>
        <a href="/">
          <Home />
          <span>Home</span>
        </a>
        <a href="/Tv">
          <Tv /> <span>TV</span>
        </a>
        <a href="/movies">
          <Clapperboard /> <span>Movies</span>
        </a>
        <a href="/sports">
          <Eclipse /> <span>Sports</span>
        </a>
        <a href="/disney">
          <LayoutTemplate /> <span>Category</span>
        </a>
        {/* <a href="/kids">
          <img src="/images/kids.PNG" alt="" />
        </a> */}
      </div>
      {/* {!username ? (
        <Login onClick={handleAuth}>LOGIN</Login>
      ) : (
        <SignOut>
          <UserImage src={userphoto} alt={username}></UserImage>
          <DropDown>
            <span onClick={handleAuth}>Sign Out</span>
          </DropDown>
        </SignOut>
      )} */}
    </Nav>
  );
};

export default Sidebar;
