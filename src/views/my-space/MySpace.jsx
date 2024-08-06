import React, { Fragment, useEffect } from "react";
import { Container, SignOut, UserImage, DropDown } from "./mySpaceStyles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../../utils/firebase";
import { MdOutlineEdit } from "react-icons/md";
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
    <Container>
      <div className="content">
        {!username ? (
          <Fragment>
            <img src="images/login_bg.webp" alt="" />
            <p>Login to Disney+</p>
            <p className="sub-text">
              Start watching from where you left off, personalise for kids and
              more
            </p>
            <button onClick={handleAuth} className="blue-btn">
              Login
            </button>
          </Fragment>
        ) : (
          <Fragment>
            <div className="row">
              <div>
                <p className="gradient-text">Disney + Hotstart Super &gt;</p>
              </div>
              <div className="action-btn-container">
                <button className="blue-btn">Upgrade</button>
                <SignOut>
                  <button>Logout</button>{" "}
                  <DropDown>
                    <span onClick={handleAuth}>Sign Out</span>
                  </DropDown>
                </SignOut>
              </div>
            </div>
            <div className="row">
              <div>
                <p className="sub-heading">Profile</p>
                <UserImage src={userphoto} alt={username}></UserImage>
              </div>

              <button className="edit-btn">
                <MdOutlineEdit className="edit-icon" />
                Edit
              </button>
            </div>
          </Fragment>
        )}
      </div>
    </Container>
  );
};

export default MyPage;
