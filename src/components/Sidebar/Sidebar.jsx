import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Nav, Logo } from "./SidebarStyles";
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

const Sidebar = () => {
  const location = useLocation();

  const { pathname } = location;

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
