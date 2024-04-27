import { IMG_CDN_URL } from "../constants";

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

export default RestaurantCard;
