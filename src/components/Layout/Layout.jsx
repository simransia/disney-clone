import React from "react";
import { Container, Content } from "../../views/home/homeStyles";
import { Footer, Sidebar } from "../../components";
import Navbar from "../Navbar";
import BottomBar from "../BottomBar";
import { Fragment } from "react";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <Container>
        <Sidebar />
        <div className="content-container">
          <Content>{children}</Content>
          <Footer />
        </div>
      </Container>
      <BottomBar />
    </Fragment>
  );
};

export default Layout;
