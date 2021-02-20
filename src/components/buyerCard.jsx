import React from "react";

const BuyerCard = () => {
  return (
    <div>
      <div class="sell_items">
        <div class="sell_items-cards">
          <div class="sell_items-cards--img">
            <img
              src="../images/nimbu.jpg"
              class="sell_items-cards--img-i"
              alt="Lemon"
            />
          </div>

          <div class="sell_items-cards--main">
            <h2 class="sell_items-cards--main-heading">Lemon</h2>
            <div class="sell_items-cards--main-des">
              High Quality Premium Lemon
            </div>
            <div class="sell_items-cards--main-name">
              Sold by Hari Mohan Prasad
            </div>
            <div class="sell_items-cards--main-price">
              Min Price: <span>₹100/ kg</span>
            </div>
          </div>

          <div class="sell_items-cards--btn">
            <div class="sell_items-cards--btn-b btn-blue">Start Bidding</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerCard;
