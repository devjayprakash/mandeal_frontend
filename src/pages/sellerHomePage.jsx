import React from "react";
import AddNewProduct from "../components/addNewProduct";
import Logo from "../components/logo";
import SellerCard from "../components/sellerCard";

const SellerHomePage = () => {
  return (
    <div>
      <div className="sell">
        <div className="sell_nav">
          <Logo nav />
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
        </div>

        <hr className="mu md" />
        <AddNewProduct />
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default SellerHomePage;
