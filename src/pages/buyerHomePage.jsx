import React from "react";

const BuyerHomePage = () => {
  return (
    <div>
      <div class="sell">
        <div class="sell_nav">
          <div class="sell_nav-logo logo">
            Man<span class="span">deal</span>
          </div>
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

        <hr class="mu md" />
      </div>
      <div class="footer"></div>
    </div>
  );
};

export default BuyerHomePage;
