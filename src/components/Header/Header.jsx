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
import { FaBars } from "react-icons/fa";
import { Nav, Logo, Login, SignOut, UserImage, DropDown } from "./HeaderStyles";

const Header = () => {
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
      <div className="bar">
        <FaBars className="icon" />
        <Logo>
          <img src="/images/logo.svg" alt="Disney" />
        </Logo>
      </div>
      <div className="navMenu">
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
          <img src="/images/kids.PNG" alt="" />
        </a>
      </div>
      {!username ? (
        <Login onClick={handleAuth}>LOGIN</Login>
      ) : (
        <SignOut>
          <UserImage src={userphoto} alt={username}></UserImage>
          <DropDown>
            <span onClick={handleAuth}>Sign Out</span>
          </DropDown>
        </SignOut>
      )}
    </Nav>
  );
};

export default Header;
