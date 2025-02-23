import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./css/Navbar.css";
import {Link} from "react-scroll"
const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <Link to="Home" smooth={true} duration={1500} className="menu-item">Home</Link>
        <Link to="About" smooth={true} duration={1500} className="menu-item">About</Link>
        <Link to="Expertise" smooth={true} duration={1500} className="menu-item">Expertise</Link>
        <Link to="Projects" smooth={true} duration={1500} className="menu-item">Projects</Link>
        <Link to="Achievements" smooth={true} duration={1500} className="menu-item">Achievements</Link>
        <Link to="Contact" smooth={true} duration={1500} className="menu-item">Contact</Link>
        <div style={{ flexGrow: 0.1 }}></div>
        <a
          href="https://www.linkedin.com/in/thiriloksha-s-797312258"
          target="_blank"
        className="nav-icon">
          <FaLinkedin />
        </a>

        <a href="https://github.com/Thiriloksha-s" target="_blank">
          <FaGithub className="nav-icon"/>
        </a>

        <a href="mailto:thiriloksha@gmail.com">
          <FaEnvelope className="nav-icon"/>
        </a>
      
      </div>
      
    </nav>
  );
};

export default Navbar;
