import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>King's</h1>
          <p>Events and Weddings</p>
        </div>
        <div className="tag">
          <div className="return">
            <Link to="hero" spy={true} smooth={true} duration={500}  >RETURN</Link>
          </div>

        </div>
      </div>
    </footer>
  );
};
export default Footer;
