import React from "react";
import foodzillaLogo from "../../assets/images/foodzilla-logo.png";
import { IMG_CDN_URL, restaurantList } from "../../constants";
import "./AppLayout.css";

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

const RestaurantCard = (props) => {
  const { name, cuisines, resBanner, deliveryTime, costForTwo, avgRating } =
    props;

  return (
    <div className="res-card">
      <div className="res-banner-container">
        <img
          className="res-banner"
          src={`${IMG_CDN_URL + resBanner}`}
          alt="res-banner"
        />
      </div>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime}minutes</h4>
    </div>
  );
};

const Body = () => {
  const renderRestaurantCards = () => {
    return restaurantList.map((restaurantItem) => {
      const dynamicDataAsProps = {
        name: restaurantItem.data?.name,
        cuisines: restaurantItem.data?.cuisines,
        resBanner: restaurantItem.data?.cloudinaryImageId,
        deliveryTime: restaurantItem.data?.deliveryTime,
        costForTwo: restaurantItem.data?.costForTwo,
        avgRating: restaurantItem.data?.avgRating,
      };
      return <RestaurantCard {...dynamicDataAsProps} />;
    });
  };

  return (
    <main>
      <div className="app-content-home">
        <div>
          <div className="search-home-box-container">
            <div className="search-home-box">
              <div style={{ flexGrow: 1, padding: "0 6px" }}>
                <input placeholder="Search for restaurants and food" />
              </div>
              <div />
            </div>
          </div>
          <div className="res-container">{renderRestaurantCards()}</div>
        </div>
      </div>
    </main>
  );
};

const Footer = () => {
  return (
    <>
      <footer></footer>
    </>
  );
};

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

export default AppLayout;
