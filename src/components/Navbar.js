import React, { useState } from "react";
import BrandLogo from "../assets/images/brand.jpg";

import "./Navbar.css";

const Navbar = () => {
  const [isActive, setisActive] = useState(false);

  return (
    <nav
      className="navbar is-fixed-top is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="" href="https://janbar.netlify.app">
          <img
            src={BrandLogo}
            alt="Barnd logo"          
            id="navbar-item-photo"
          />
        </a>

        <a
          role="button"
          className={`navbar-burger burger${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => setisActive(!isActive)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <a className="navbar-item">Home</a>
          <a className="navbar-item">Nasza firma</a>
          <a className="navbar-item">Realizacje</a>
          <a className="navbar-item">Usługi</a>
          <a className="navbar-item">Park maszynowy</a>
          <a className="navbar-item">Kontakt</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
