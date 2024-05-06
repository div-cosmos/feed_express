import { useEffect } from "react";

const PageRestaurant = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // const res = await fetch();
  };

  return (
    <div className="hero-res-section">
      <div className="res-name">
        <h2>Res Name</h2>
      </div>
      <div className="res-card">Res Card</div>
      <div className="res-menu-container">
        <div>
          <input id="res-menu-search" />
        </div>
        <div className="res-menu-filter"></div>

        <div className="res-menu-list"></div>
      </div>
    </div>
  );
};

export default PageRestaurant;
