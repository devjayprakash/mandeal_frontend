import React from "react";

const SellerCard = () => {
  return (
    <div>
      <div className="sell_items-cards">
        <div className="sell_items-cards--img">
          <img
            src="./images/nimbu.jpg"
            className="sell_items-cards--img-i"
            alt="Lemon"
          />
        </div>
        <div className="sell_items-cards--main">
          <h2 className="sell_items-cards--main-heading">Lemon</h2>
          <div className="sell_items-cards--main-des">
            High Quality Premium Lemon
          </div>
          <div className="sell_items-cards--main-name">
            Sold by Hari Mohan Prasad
          </div>
          <div className="sell_items-cards--main-price">
            Min Price: <span>₹100/ kg</span>
          </div>
        </div>

        <div className="sell_items-cards--btn">
          <div className="sell_items-cards--btn-b btn-blue">See Stats</div>
        </div>
      </div>
    </div>
  );
};

export default SellerCard;
