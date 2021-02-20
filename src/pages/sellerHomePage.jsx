import React from "react";

const SellerHomePage = () => {
  return (
    <div>
      <div class="sell">
        <div class="sell_nav">
          <div class="sell_nav-logo logo">
            Man<span class="span">deal</span>
          </div>
          <div class="sell_nav-profile">
            <img
              src="./images/icons/bell.png"
              alt=""
              class="sell_nav-profile-bell"
            />
            <img
              src="./images/icons/avatar.png"
              alt=""
              class="sell_nav-profile-avatar"
            />
          </div>
        </div>
        <hr />
        <h1 class="sell_heading">Your Products</h1>
        <div class="sell_items">
          <div class="sell_items-cards">
            <div class="sell_items-cards--img">
              <img
                src="./images/nimbu.jpg"
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
              <div class="sell_items-cards--btn-b btn-blue">See Stats</div>
            </div>
          </div>
        </div>

        <hr class="mu md" />

        <div class="sell_new">
          <div class="sell_new-product">
            <h1 class="sell_new-product--header">Create New Product</h1>
            <hr class="md" />
            <input
              type="text"
              class="sell_new-product--name "
              placeholder="Name Of Product"
            />
            <br />
            <input
              type="text"
              class="sell_new-product--des "
              placeholder="Name Of Product"
            />
            <div class="sell_new-product--c">
              <input
                type="text"
                class="sell_new-product--c-seller "
                placeholder="Name Of Seller"
              />
              <input
                type="text"
                class="sell_new-product--c-price "
                placeholder="Price Per kg"
              />
            </div>
            <div class="sell-new-product-btn btn-blue">Add New Product</div>
          </div>
        </div>
      </div>
      <div class="footer"></div>
    </div>
  );
};

export default SellerHomePage;
