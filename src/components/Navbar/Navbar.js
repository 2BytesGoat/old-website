import React from "react";
import logo from "../../media/logo.png";
import "./Navbar.css";

const navbar = () => (
  <div className="navbar">
    <div className="d-flex align-items-center">
      <a href="/">
        <img src={logo} alt="logo-home" className="logo" />
      </a>
      <a
        href="https://2bytesgoat.blogspot.com/"
        target="_blank"
        rel="noreferrer"
        className="navbar-item"
      >
        Blog
      </a>
      <a className="navbar-item" href="/about">
        About
      </a>
    </div>
    <div className="d-flex align-items-center">
      <a
        className="link-dark navbar-item"
        href="https://github.com/2BytesGoat"
        target="_blank"
        rel="noreferrer"
      >
        <i aria-hidden="true" className="github big icon" />
      </a>
      <a
        className="link-dark navbar-item"
        href="https://www.youtube.com/channel/UCIXzN1AIJlp847fiQWO3gWQ"
        target="_blank"
        rel="noreferrer"
      >
        <i aria-hidden="true" className="youtube big icon" />
      </a>
      <a
        className="link-dark navbar-item"
        href="https://twitter.com/2bytesgoat"
        target="_blank"
        rel="noreferrer"
      >
        <i aria-hidden="true" className="twitter big icon" />
      </a>
      <a
        className="link-dark"
        href="https://www.patreon.com/2bytesgoat"
        target="_blank"
        rel="noreferrer"
      >
        <button className="pink-btn">Feed the goat</button>
      </a>
    </div>
  </div>
);

export default navbar;
