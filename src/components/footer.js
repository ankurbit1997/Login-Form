import React from "react";

import GALogo from "../assets/Image 32@2x.png";
import GALogoLight from "../assets/Image 33@2x.png";

const Footer = ({ dark }) => {
  return (
    <footer>
      <h2 style={{ color: dark ? "white" : "#333333" }}>Powered by</h2>
      <img src={dark ? GALogoLight : GALogo} alt="GeekyAnts logo" />
    </footer>
  );
};

export default Footer;
