import React from "react";
import { BsApple } from "react-icons/bs";
import { RiFacebookFill, RiTwitterFill } from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";
import { FootNote } from "./FooterStyles";

const Footer = () => {
  return (
    <FootNote>
      <div className="column first">
        <p>Company</p>
        <div className="links">
          <a href="/disneyplus">About Us</a>

          <a href="/disneyplus">Careers</a>
        </div>

        <p className="copyright-text">© 2022 STAR. All Rights Reserved.</p>
        <p className="additional-links">
          <a href="/disneyplus">Terms of Use</a>{" "}
          <a href="/disneyplus">Privacy Policy</a>
          <a href="/disneyplus">FAQ</a>
        </p>
      </div>

      <div className="second column">
        <p>View Website in</p>
        <div className="links">
          <a href="/disneyplus">
            <IoMdCheckmark style={{ fontSize: "1.2rem" }} />
            English
          </a>
        </div>
      </div>

      <div className="third column">
        <p>Need help ?</p>
        <div className="links">
          <a href="/disneyplus">Visit Help Center</a>
          <a href="/disneyplus">Share Feedback</a>
        </div>
      </div>

      <div className="fourth column">
        <p>Connect with us</p>
        <div className="inner-first">
          <RiFacebookFill style={{ color: "white", fontSize: "1.6rem" }} />

          <RiTwitterFill style={{ color: "white", fontSize: "1.6rem" }} />
        </div>
        <div className="inner-second">
          <button>
            <img src="/images/play.png" alt="" />
            <div>
              <p className="subtext">Get it on:</p>
              <h2>Google Play</h2>
            </div>
          </button>

          <button>
            <BsApple className="apple-icon" />
            <div>
              <p className="subtext">Download on the</p>
              <h2>App Store</h2>
            </div>
          </button>
        </div>
      </div>
    </FootNote>
  );
};

export default Footer;
