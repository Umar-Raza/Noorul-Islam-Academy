import { useState } from "react";
import {Text } from "lucide-react";
import { Link } from "react-router";
import logo from "../../../assets/brandIcon.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <div className="container">
        {/* Brand */}
        <img
          src={logo}
          alt=""
          className="d-inline-block align-text-top me-2 brand-logo"
          width="60"
          height="60"
        />
        <a className="navbar-brand" href="/">
          {/* {/* <BookOpenText */}
          {/* /> */}
          Noorul islam Academy
        </a>
        {/* Mobile toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <Text  className="toggleIcon"/>
        </button>
        {/* Navigation items */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#courses">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>

          {/* Right side Register button */}
          <div className="d-flex">
            <Link className="registerLink" to="/registration">
              <button type="button" className="registerBtn btn-lg">
                Register now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
