import React from "react";
import foodzillaLogo from "../../assets/images/foodzilla-logo.png";
import "./AppLayout.css";

const Header = () => {
  return (
    <div className="header">
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
  );
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
    </React.Fragment>
  );
};
export default AppLayout;
