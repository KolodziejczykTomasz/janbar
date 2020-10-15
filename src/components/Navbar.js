import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <img src={BrandLogo} alt="Barnd logo" id="navbar-item-photo" />
        </Link>

        <Link
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
        </Link>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          <Link className="navbar-item is-focused" id="linkItem">
            Home
          </Link>
          <Link className="navbar-item is-focused" id="linkItem">
            Nasza firma
          </Link>
          <Link className="navbar-item is-focused" id="linkItem">
            Realizacje
          </Link>
          <Link className="navbar-item is-focused" id="linkItem">
            Usługi
          </Link>
          <Link className="navbar-item is-focused" id="linkItem">
            Park maszynowy
          </Link>
          <Link className="navbar-item is-focused" id="linkItem">
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
