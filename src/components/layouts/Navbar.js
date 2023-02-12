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
        <img className="logo_one" src="images/logo.svg" alt="logo" />
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <img className="logo" src="images/logo.svg" alt="logo" />
          <li className="item">Features</li>
          <li className="item">Pricing</li>
          <li className="item">Resources</li>
          <li className="item">Login</li>
          <li className="nav-item item">
            <button className="btn">Sign Up</button>
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
