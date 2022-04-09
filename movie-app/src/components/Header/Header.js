import React from "react";
import Logo from "../Header/video-camera.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header" onClick={() => window.scroll(0, 0)}>
      <img className="logo" src={Logo} alt="" />
    </div>
  );
};

export default Header;
