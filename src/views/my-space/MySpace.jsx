import React from "react";
import { Container } from "./mySpaceStyles";

const MyPage = () => {
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
      <button className="">Login</button>
      {/* {!username ? (
        <Login onClick={handleAuth}>LOGIN</Login>
      ) : (
        <SignOut>
          <UserImage src={userphoto} alt={username}></UserImage>
          <DropDown>
            <span onClick={handleAuth}>Sign Out</span>
          </DropDown>
        </SignOut>
      )} */}
    </Container>
  );
};

export default MyPage;
