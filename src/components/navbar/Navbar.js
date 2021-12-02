import React, { useState } from "react";
import "./Navbar.css";
import { GiLyre } from "react-icons/gi";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="container navbar">
      <div className="logo">
        <GiLyre />
        <p className="logo-text">
          &nbsp;Mistrz <span>z Czarnolasu</span>
        </p>
      </div>
      <menu>
        <ul
          className="nav-links"
          id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
        >
          <li>
            <a href="#">Start</a>
          </li>
          <li>
            <a href="#twórczość">Twórczość</a>
          </li>
          <li>
            <a href="#życiorys">Życiorys</a>
          </li>
          <li>
            <a href="#dorobek">Dorobek</a>
          </li>
          {/* <li className="nav-btn">
            <a href="#get" className="btn btn-dark">
              Get
            </a>
          </li> */}
          <li className="nav-btn">
            <Button
              text={"Ciekawostki"}
              btnClass={"btn-dark"}
              href={"#ciekawostki"}
            />
          </li>
        </ul>
      </menu>
      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? <RiCloseLine /> : <AiOutlineBars />}
      </div>
    </nav>
  );
};

export default Navbar;
