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
        <Content>
          {children}
          <Footer />
        </Content>
      </Container>
      <BottomBar />
    </Fragment>
  );
};

export default Layout;
