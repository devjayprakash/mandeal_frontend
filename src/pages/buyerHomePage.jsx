import React from "react";
import Logo from "../components/logo";
import Search from "../components/search";

const BuyerHomePage = () => {
  return (
    <div>
      <div class="sell">
        <div class="sell_nav">
          <Logo nav />
          <div
            style={{
              display: "flex",
              minWidth: "500px",
            }}
          >
            <Search />
            <div className="sell_nav-profile">
              <img
                src="../images/icons/bell.png"
                alt=""
                className="sell_nav-profile-bell"
              />
              <img
                src="../images/icons/avatar.png"
                alt=""
                className="sell_nav-profile-avatar"
              />
            </div>
          </div>
        </div>
        <hr className="md mu" />

        <div className="sell_items">
          <div className="sell_items-cards">
            <div className="sell_items-cards--img">
              <img
                src="../images/nimbu.jpg"
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
              <div className="sell_items-cards--btn-b btn-blue">
                Start Bidding
              </div>
            </div>
          </div>
        </div>

        <hr className="mu md" />
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default BuyerHomePage;
