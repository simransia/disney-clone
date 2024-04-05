import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
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
import { ROUTES } from "../../constants/routes";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector(selectUserName);
  const userphoto = useSelector(selectUserPhoto);

  const location = useLocation();

  const { pathname } = location;

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

  console.log(pathname);

  return (
    <Nav>
      <div className="navMenu">
        <Logo>
          <img src="/images/logo.svg" alt="Disney" />
        </Logo>
        <div className="links">
          <a
            href={ROUTES.PROFILE}
            className={pathname === ROUTES.PROFILE ? "active" : ""}
          >
            <CircleUser />
            <span>My Space</span>
          </a>
          <a
            href={ROUTES.SEARCH}
            className={pathname === ROUTES.SEARCH ? "active" : ""}
          >
            <Search /> <span>Search</span>
          </a>
          <a
            href={ROUTES.HOME}
            className={pathname === ROUTES.HOME ? "active" : ""}
          >
            <Home />
            <span>Home</span>
          </a>
          <a
            href={ROUTES.SHOWS}
            className={pathname === ROUTES.SHOWS ? "active" : ""}
          >
            <Tv /> <span>TV</span>
          </a>
          <a
            href={ROUTES.MOVIES}
            className={pathname === ROUTES.MOVIES ? "active" : ""}
          >
            <Clapperboard /> <span>Movies</span>
          </a>
          <a
            href={ROUTES.SPORTS}
            className={pathname === ROUTES.SPORTS ? "active" : ""}
          >
            <Eclipse /> <span>Sports</span>
          </a>
          <a
            href={ROUTES.CATEGORIES}
            className={pathname === ROUTES.CATEGORIES ? "active" : ""}
          >
            <LayoutTemplate /> <span>Categories</span>
          </a>
        </div>
        {/* <a href="/kids">
          <img src="/images/kids.PNG" alt="" />
        </a> */}
      </div>
    </Nav>
  );
};

export default Sidebar;
