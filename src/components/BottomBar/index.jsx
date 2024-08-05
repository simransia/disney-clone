import React from "react";
import { BottomBarContainer } from "./bottomBarStyles";
import { useLocation } from "react-router-dom";
import {
  CircleUser,
  Clapperboard,
  Eclipse,
  Home,
  LayoutTemplate,
  Search,
  Tv,
} from "lucide-react";
import { ROUTES } from "../../constants/routes";

const BottomBar = () => {
  const location = useLocation();

  const { pathname } = location;

  return (
    <BottomBarContainer>
      <a
        href={ROUTES.HOME}
        className={pathname === ROUTES.HOME ? "active" : ""}
      >
        <Home />
        <span>Home</span>
      </a>
      <a
        href={ROUTES.SEARCH}
        className={pathname === ROUTES.SEARCH ? "active" : ""}
      >
        <Search /> <span>Search</span>
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
      {/* <a
        href={ROUTES.SPORTS}
        className={pathname === ROUTES.SPORTS ? "active" : ""}
      >
        <Eclipse /> <span>Sports</span>
      </a> */}
      <a
        href={ROUTES.PROFILE}
        className={pathname === ROUTES.PROFILE ? "active" : ""}
      >
        <CircleUser />
        <span>My Space</span>
      </a>
    </BottomBarContainer>
  );
};

export default BottomBar;
