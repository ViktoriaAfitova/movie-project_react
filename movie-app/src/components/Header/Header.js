import React from "react";
import Logo from "../Header/video-camera.png";
import "./header.css";
import Search from "../../pages/Search/Search";

const Header = () => {

  return (
    <div className="header" onClick={() => window.scroll(0, 0)}>
      <div>
        <img className="logo" src={Logo} alt="" />
      </div>
      <div>
        {/* <input
          className="form-control"
          placeholder="Search"
        ></input> */}
        <Search />
      </div>
    </div>
  );
};

export default Header;
