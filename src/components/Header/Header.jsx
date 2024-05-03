import React from "react";
import { Link } from "react-router-dom";
import foodzillaLogo from "../../assets/images/foodzilla-logo.png";

const Header = () => {
  return (
    <header>
      <div className="global-nav">
        <div className="logo-container">
          <img id="logo" src={foodzillaLogo} alt="logo" />
        </div>
        <div className="nav-foodzilla-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
