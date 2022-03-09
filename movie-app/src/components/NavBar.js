import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [toggler, setToggler] = useState(false);

  const links = [
    {
      name: "Trending",
      link: "/",
    },
    {
      name: "Movies",
      link: "/movies",
    },
    {
      name: "Tv Series",
      link: "/Tv",
    },
  ];

  const toggleMenu = () => {
    setToggler(!toggler);
  };

  return (
    <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid justify-content-center">
        <ul className="navbar-nav">
          {links.map((link, index) => (
            <li key={index} className="nav-item">
              <Link to={link.link} className="nav-link" onClick={toggleMenu}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
