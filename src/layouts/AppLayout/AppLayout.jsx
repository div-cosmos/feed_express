import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RestaurantCard from "../../components/RestaurantCard";
import "./AppLayout.css";

const AppLayout = () => {
  const [restaurantInfoList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );

    const jsonData = await data.json();
    console.log(jsonData);

    setRestaurantList(() => {
      let restaurantData = [];
      jsonData.data?.cards?.map((card) => {
        if (card?.card?.card?.id === "restaurant_grid_listing") {
          restaurantData = card?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants?.length
            ? card?.card?.card?.gridElements?.infoWithStyle?.restaurants
            : {};
        }
      });
      return restaurantData?.length ? restaurantData : [];
    });
  };

  /* Event Handlers */
  const onTopRatedResFilter = () => {
    setRestaurantList(
      restaurantInfoList.filter((resInfo) => {
        if (!isNaN(resInfo.info?.avgRating))
          return Number(resInfo.info?.avgRating) > 4;
        else return resInfo;
      })
    );
  };

  {
    /* Sectional Renders */
  }
  const renderRestaurantCards = () => {
    return restaurantInfoList?.map((restaurantItem) => {
      let dynamicDataAsProps = {};
      if (restaurantItem?.info) {
        dynamicDataAsProps.name = restaurantItem?.info?.name;
        dynamicDataAsProps.cuisines = restaurantItem?.info?.cuisines;
        dynamicDataAsProps.resBanner = restaurantItem?.info?.cloudinaryImageId;
        dynamicDataAsProps.deliveryTime = restaurantItem?.info?.deliveryTime;
        dynamicDataAsProps.costForTwo = restaurantItem?.info?.costForTwo;
        dynamicDataAsProps.avgRating = restaurantItem?.info?.avgRating;
        dynamicDataAsProps.areaName = restaurantItem?.info?.areaName;
      }

      // else {
      //   dynamicDataAsProps.name = restaurantItem.data?.name;
      //   dynamicDataAsProps.cuisines = restaurantItem.data?.cuisines;
      //   dynamicDataAsProps.resBanner = restaurantItem.data?.cloudinaryImageId;
      //   dynamicDataAsProps.deliveryTime = restaurantItem.data?.deliveryTime;
      //   dynamicDataAsProps.costForTwo = restaurantItem.data?.costForTwo;
      //   dynamicDataAsProps.avgRating = restaurantItem.data?.avgRating;
      // }

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
