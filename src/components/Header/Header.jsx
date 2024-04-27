import React from "react";
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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
