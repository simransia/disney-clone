import React, { useEffect } from "react";
import { Container, SignOut, UserImage, DropDown } from "./mySpaceStyles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../../utils/firebase";
import {
  selectUserPhoto,
  selectUserName,
  setUserLoginDetails,
  setSignOutState,
} from "../../utils/slices/user/userSlice";

const MyPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector(selectUserName);
  const userphoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        // navigate("/");
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
    <Container
      style={{
        backgroundImage:
          "https://www.hotstar.com/assets-x/web/assets-ui-lib/images/stars.9c90b28001575d3d107b.svg",
      }}
    >
      <img src="images/login_bg.webp" alt="" />
      <p>Login to Disney+</p>
      <p>
        Start watching from where you left off, personalise for kids and more
      </p>
      {!username ? (
        <button onClick={handleAuth} className="">
          Login
        </button>
      ) : (
        <SignOut>
          <UserImage src={userphoto} alt={username}></UserImage>
          <DropDown>
            <span onClick={handleAuth}>Sign Out</span>
          </DropDown>
        </SignOut>
      )}
    </Container>
  );
};

export default MyPage;
