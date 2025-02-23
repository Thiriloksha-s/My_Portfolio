import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./css/Navbar.css";
import {Link} from "react-scroll"
const Navbar = () => {
  return (
    <nav>
      <div >
        <Link className="menu-item">Home</Link>
        <Link className="menu-item">About</Link>
        <Link className="menu-item">Expertise</Link>
        <Link className="menu-item">Projects</Link>
        <Link className="menu-item">Achievements</Link>
        <Link className="menu-item">Contact</Link>
      </div>
      <div className="icon">
        <a
          href="https://www.linkedin.com/in/thiriloksha-s-797312258"
          target="_blank"
        className="align-icon">
          <FaLinkedin />
        </a>

        <a href="https://github.com/Thiriloksha-s" target="_blank">
          <FaGithub />
        </a>

        <a href="mailto:thiriloksha@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
