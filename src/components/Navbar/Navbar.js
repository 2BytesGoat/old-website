import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const navbar = () => (
  <div className="container py-3 mb-4" style={{ position: "absolute" }}>
    <div className="row">
      <div className="d-flex justify-content-start col-xs-6 col-sm-4">
        <a className="link-dark" href="https://github.com/2BytesGoat">
          <i aria-hidden="true" className="github big icon navbar-item" />
        </a>
        <a className="link-dark" href="https://www.patreon.com/2bytesgoat">
          <i aria-hidden="true" className="patreon big icon navbar-item"></i>
        </a>
      </div>
    </div>
    <div className="row">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="d-flex justify-content-center col-xs-18 col-sm-12">
          <ul className="navbar-nav">
            <li className="nav-item active px-4">
              <NavLink className="nav-link navbar-item" exact="true" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item px-4">
              <NavLink className="nav-link navbar-item" exact="true" to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item px-4">
              <NavLink
                className="nav-link navbar-item"
                exact="true"
                to="/projects"
              >
                Demos
              </NavLink>
            </li>
            <li className="nav-item px-4">
              <NavLink
                className="nav-link navbar-item"
                exact="true"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item px-4">
              <NavLink
                className="nav-link navbar-item"
                exact="true"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
);

export default navbar;
