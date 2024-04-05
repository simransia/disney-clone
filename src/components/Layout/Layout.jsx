import React from "react";
import { Container, Content } from "../../views/home/homeStyles";
import { Footer, Sidebar } from "../../components";

const Layout = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      <Content>
        {children}
        <Footer />
      </Content>
    </Container>
  );
};

export default Layout;
