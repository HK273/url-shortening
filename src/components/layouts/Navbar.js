import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../images/logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Mobile Menu
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <nav className="menu navbar">
        <img className="logo_one" src={Logo} alt="logo" />
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="item">Features</li>
          <li className="item">Pricing</li>
          <li className="item">Resources</li>
          <li className="item">Login</li>
          <li className="nav-item item">
            <button className="nav-btn">Sign Up</button>
          </li>
        </ul>
        <div
          onClick={toggleMobileMenu}
          className={`hamburger ${isOpen ? "active" : ""}`}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
