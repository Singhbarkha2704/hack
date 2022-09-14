import React from "react";
import '../../../../Styles/dashboard.css'

const RecommendDecorCard = (props) => {
  const { DecorName, rating, imgUrl, productPrice, percentage } = props.item;
  return (
    <div className="recommend__decor-card">
      <div className="recommend__decor-top">
        <h5>
          <span>
            <i class="ri-refresh-line"></i>
          </span>
          {percentage}% Recommended
        </h5>
      </div>

      <div className="recommend__decor-img">
        <img className="recommend-img"  src={imgUrl} alt="" />
      </div>
      <div className="recommend__decor-bottom">
        <h4>{DecorName}</h4>
        <div className="recommend__decor-other">
          <div className="recommend__icons">
            <p>
              <i class="ri-repeat-line"></i>
              {rating} 
              <i class="ri-heart-3-line" ></i>
            </p>
          </div>
          <span>₹ {productPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default RecommendDecorCard;
