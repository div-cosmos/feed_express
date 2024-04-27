import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RestaurantCard from "../../components/RestaurantCard";
import { restaurantList } from "../../constants";
import "./AppLayout.css";

const AppLayout = () => {
  const [restaurantInfoList, setRestaurantList] =
    React.useState(restaurantList);

  const onTopRatedResFilter = () => {
    setRestaurantList(
      restaurantInfoList.filter((resList) => {
        if (!isNaN(resList.data?.avgRating))
          return Number(resList.data.avgRating) > 4;
        else return resList;
      })
    );
  };

  {
    /* Sectional Renders */
  }
  const renderRestaurantCards = () => {
    return restaurantInfoList.map((restaurantItem) => {
      const dynamicDataAsProps = {
        name: restaurantItem.data?.name,
        cuisines: restaurantItem.data?.cuisines,
        resBanner: restaurantItem.data?.cloudinaryImageId,
        deliveryTime: restaurantItem.data?.deliveryTime,
        costForTwo: restaurantItem.data?.costForTwo,
        avgRating: restaurantItem.data?.avgRating,
      };
      return (
        <RestaurantCard
          key={restaurantItem.data?.uuid}
          {...dynamicDataAsProps}
        />
      );
    });
  };

  return (
    <React.Fragment>
      <Header />
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
            <div>
              <button className="btn-filter-res" onClick={onTopRatedResFilter}>
                Top Rated Restaurants
              </button>
            </div>
            <div className="res-container">{renderRestaurantCards()}</div>
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default AppLayout;
