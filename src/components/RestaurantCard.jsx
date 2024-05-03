import { IMG_CDN_URL } from "../constants";

const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    resBanner,
    deliveryTime,
    costForTwo,
    avgRating,
    areaName,
  } = props;

  return (
    <div className="res-card">
      <div className="res-banner-container">
        <img
          className="res-banner"
          src={`${IMG_CDN_URL + resBanner}`}
          alt="res-banner"
        />
      </div>
      <h4>{name}</h4>
      <h4>
        {avgRating} stars {deliveryTime}
      </h4>
      <h4>{costForTwo}</h4>
      <p>{cuisines?.join(", ")}</p>
      <p>{areaName}</p>
    </div>
  );
};

export default RestaurantCard;
