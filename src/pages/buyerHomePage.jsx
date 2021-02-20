import React from "react";
import BuyerCard from "../components/buyerCard";

const BuyerHomePage = () => {
  return (
    <div>
      <div class="sell">
        <div class="sell_nav">
          <div class="search">
            <div class="search-container">
              <input
                type="text"
                class="search-container-bar"
                placeholder="Search for Products"
              />
              <div class="search-container-icon">
                <img src="../images/icons/search.svg" alt="search" />
              </div>
            </div>
          </div>
          <div class="sell_nav-profile">
            <img
              src="../images/icons/bell.png"
              alt=""
              class="sell_nav-profile-bell"
            />
            <img
              src="../images/icons/avatar.png"
              alt=""
              class="sell_nav-profile-avatar"
            />
          </div>
        </div>
        <hr class="md mu" />
        <BuyerCard />
        <hr class="mu md" />
      </div>
      <div class="footer"></div>
    </div>
  );
};

export default BuyerHomePage;
