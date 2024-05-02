import React from "react";
import { SHIMMER_TYPE } from "../constants";

const Shimmer = ({ type, className, styleObj, templateCount }) => {
  const renderShimmer = () => {
    if (type === SHIMMER_TYPE.RES_CARD) {
      debugger;
      const generateLoadTemplate = () => {
        let resCards = [];
        let cardCount = templateCount ? templateCount : 1;
        for (let i = 1; i <= cardCount; i++) {
          let cardElement = (
            <div
              key={`${Math.random().toString(36).substring(2)}`}
              className="shimmer-res-card-wrapper"
            >
              <div className="shimmer-res-card" />
            </div>
          );
          resCards.push(cardElement);
        }
        return resCards;
      };
      return <div className="shimmer-ui-wrapper">{generateLoadTemplate()}</div>;
    } else if (type === SHIMMER_TYPE.RECT) {
      return <div className="shimmer-rect" style={{ ...styleObj }} />;
    }
  };

  return <div className="">{renderShimmer()}</div>;
};

export default Shimmer;
