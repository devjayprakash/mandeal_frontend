import React from "react";
import { useHistory } from "react-router-dom";

const SellerCard = (data) => {
  let his = useHistory();

  return (
    <div>
      <div className="sell_items-cards">
        <div className="sell_items-cards--img">
          <img
            src={data.data.image}
            className="sell_items-cards--img-i"
            alt="Lemon"
          />
        </div>
        <div className="sell_items-cards--main">
          <h2 className="sell_items-cards--main-heading">{data.data.name}</h2>
          <div className="sell_items-cards--main-des">
            High Quality Premium Lemon
          </div>
          <div className="sell_items-cards--main-name">
            Sold by {data.data.createdBy.name}
          </div>
          <div className="sell_items-cards--main-price">
            Min Price: <span>₹${data.data.mppk.amount}/ kg</span>
          </div>
        </div>

        <div
          onClick={() => {
            his.push("/sellerbidding/" + data.data._id);
          }}
          className="sell_items-cards--btn btn-blue"
        >
          See Stats
        </div>
      </div>
    </div>
  );
};

export default SellerCard;
