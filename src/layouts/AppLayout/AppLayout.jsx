import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RestaurantCard from "../../components/RestaurantCard";
import Shimmer from "../../components/Shimmer";
import { SHIMMER_TYPE } from "../../constants";
import "./AppLayout.css";

const AppLayout = () => {
  const [restaurantInfoList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const jsonData = await data.json();

    let restaurantsData = [];
    jsonData.data?.cards?.forEach((card) => {
      if (card?.card?.card?.id === "restaurant_grid_listing") {
        const resData = card?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants?.length
          ? card?.card?.card?.gridElements?.infoWithStyle?.restaurants
          : {};
        restaurantsData = resData;
      }
    });
    setRestaurantList(restaurantsData);
    setFilteredRestaurantList(restaurantsData);
  };

  /* Event Handlers */
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const onSearchSubmit = (e) => {
    const filteredDataOnSearch = restaurantInfoList.filter((restaurant) => {
      if (restaurant?.info?.name?.toLowerCase()?.includes(search.toLowerCase()))
        return true;
      else if (restaurant?.info?.cuisines) {
        return restaurant?.info?.cuisines?.some((cuisine) =>
          cuisine?.toLowerCase()?.includes(search.toLowerCase())
        );
      } else return false;
    });
    debugger;
    if (filteredDataOnSearch.length) {
      setFilteredRestaurantList(filteredDataOnSearch);
    }
  };

  const onReset = () => {
    setFilteredRestaurantList(restaurantInfoList);
  };

  const onTopRatedResFilter = () => {
    setFilteredRestaurantList(
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

  const renderLoader = () => {
    return (
      <div>
        <Shimmer
          type={SHIMMER_TYPE.RECT}
          styleObj={{
            width: "156px",
            height: "24px",
          }}
        />
        <Shimmer type={SHIMMER_TYPE.RES_CARD} templateCount={10} />
      </div>
    );
  };

  const renderRestaurantCards = () => {
    return filteredRestaurantList?.map((restaurantItem) => {
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

      return (
        <RestaurantCard
          key={restaurantItem?.info?.id}
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
                  <input
                    type="text"
                    placeholder="Search for restaurants and food"
                    onChange={handleSearch}
                    value={search}
                  />
                </div>
                <div />
              </div>
              <button
                className="btn btn-search-submit"
                onClick={onSearchSubmit}
              >
                Search
              </button>
              <button className="btn btn-search-submit" onClick={onReset}>
                Reset
              </button>
            </div>

            {restaurantInfoList.length === 0 ? (
              renderLoader()
            ) : (
              <>
                <div>
                  <button
                    className="btn btn-filter-res"
                    onClick={onTopRatedResFilter}
                  >
                    Top Rated Restaurants
                  </button>
                </div>
                <div className="res-container">{renderRestaurantCards()}</div>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default AppLayout;
