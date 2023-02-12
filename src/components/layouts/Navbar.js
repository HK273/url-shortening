import React, { useState } from "react";
import "./Navbar.css";

function Navtwo() {
  const [isOpen, setIsOpen] = useState(false);

  // Mobile Menu
  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <nav className="menu navbar">
        <img className="logo" src="images/logo.svg" alt="logo" />
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <img className="logo" src="images/logo.svg" alt="logo" />
          <li className="item">About</li>
          <li className="item">Services</li>
          <li className="item">Projects</li>
          <span className="space"></span>
          <li className="nav-item item">
            <button className="buttons">CONTACT</button>
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

export default Navtwo;
