import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import Link from "react-scroll/modules/components/Link";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-name">Andrew</div>
        <Toggle />
      </div>
      <div className="navbar-right">
        <div className="navbar-list">
          <ul>
            <Link
              activeClass="activeClass"
              smooth={true}
              spy={true}
              to="Navbar"
            >
              <li>Home</li>
            </Link>
            <Link smooth={true} spy={true} to="Services">
              <li>Services</li>
            </Link>
            <Link smooth={true} spy={true} to="Experience">
              <li>Experience</li>
            </Link>
            <Link smooth={true} spy={true} to="Portifolio">
              <li>Portifolio</li>
            </Link>
            <Link smooth={true} spy={true} to="Testimonials">
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <Link smooth={true} spy={true} to="Contact">
          <button className="button navbar-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
