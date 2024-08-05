import React from "react";
import { Header } from "./navbarStyles";

const Navbar = () => {
  return (
    <Header>
      <img src="/images/logo.svg" alt="Disney" />
      <button>Upgrade</button>
    </Header>
  );
};

export default Navbar;
