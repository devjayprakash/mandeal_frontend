import React from "react";
import SellerCard from "../components/sellerCard";

const SellerHomePage = () => {
  return (
    <div>
      <div className="sell">
        <div className="sell_nav">
          <div className="sell_nav-logo logo">
            Man<span className="span">deal</span>
          </div>
          <div className="sell_nav-profile">
            <img
              src="./images/icons/bell.png"
              alt=""
              className="sell_nav-profile-bell"
            />
            <img
              src="./images/icons/avatar.png"
              alt=""
              className="sell_nav-profile-avatar"
            />
          </div>
        </div>
        <hr />
        <h1 className="sell_heading">Your Products</h1>
        <div className="sell_items">
          <SellerCard />
          <hr className="mu md" />

          <div className="sell_new">
            <div className="sell_new-product">
              <h1 className="sell_new-product--header">Create New Product</h1>
              <hr className="md" />
              <input
                type="text"
                className="sell_new-product--name "
                placeholder="Name Of Product"
              />
              <br />
              <input
                type="text"
                className="sell_new-product--des "
                placeholder="Name Of Product"
              />
              <div className="sell_new-product--c">
                <input
                  type="text"
                  className="sell_new-product--c-seller "
                  placeholder="Name Of Seller"
                />
                <input
                  type="text"
                  className="sell_new-product--c-price "
                  placeholder="Price Per kg"
                />
              </div>
              <div className="sell-new-product-btn btn-blue">
                Add New Product
              </div>
            </div>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
};

export default SellerHomePage;
