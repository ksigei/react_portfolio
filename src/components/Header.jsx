import React from 'react';
import { Link } from 'react-router-dom';
// import logo from "../../images/tech.png";
// import image in public folder
import image from "../images/tech.jpg";

const Header = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link to="/about" className="navbar-item" href="#">
        <img
          src={image}
          width="112"
          height="28"
          alt="logo"
        />
      </Link>

      <Link
        to="/home"
        role="button"
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </Link>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/about" className="navbar-item">
          About
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/about" className="button is-primary">
              <strong>Hire me</strong>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
);
export default Header;
