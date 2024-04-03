import React from "react";
import { BsApple } from "react-icons/bs";
import { RiFacebookFill, RiTwitterFill } from "react-icons/ri";
import { FootNote } from "./FooterStyles";

const Footer = () => {
  return (
    <FootNote>
      <div className="first">
        <div className="links">
          <a href="/disneyplus">About Disney+ Hotstar</a>
          <a href="/disneyplus">Terms Of Use</a>
          <a href="/disneyplus">Privacy Policy</a>
          <a href="/disneyplus">FAQ</a>
          <a href="/disneyplus">Feedback</a>
          <a href="/disneyplus">Careers</a>
        </div>
        <p>
          © 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related
          channel and programming logos are service marks of, and all related
          programming visuals and elements are the property of, Home Box Office,
          Inc. All rights reserved.
        </p>
      </div>

      <div className="second">
        <p>Connect with us</p>
        <div className="inner-first">
          <button>
            <RiFacebookFill style={{ color: "white", fontSize: "1.6rem" }} />
          </button>
          <button>
            <RiTwitterFill style={{ color: "white", fontSize: "1.6rem" }} />
          </button>
        </div>
      </div>

      <div className="third">
        <p className="hotstar">Disney+ Hotstar App</p>
        <div className="inner-second">
          <button>
            <img src="/images/play.png" alt="" />
            <div>
              <p>Get it on:</p>
              <h2>Google Play</h2>
            </div>
          </button>
          <br />
          <button>
            {" "}
            <BsApple style={{ color: "white", fontSize: "0.8rem" }} />
            <div>
              <p>Download on the</p>
              <h2>App Store</h2>
            </div>
          </button>
        </div>
      </div>
    </FootNote>
  );
};

export default Footer;
