import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ProfileDropdown from "../components/dropdown";

const BuyerHomePage = () => {
  let [allProducts, setAllProducts] = useState([]);
  let [drop, setDrop] = useState(false);

  let [searchQuery, setSearchQuery] = useState("");

  let history = useHistory();

  let fetchAllProducts = async () => {
    try {
      let res = await axios.get("/api/v1/product/getLast30Products");
      if (res.data.res === true) {
        console.log(res.data.products);
        setAllProducts(res.data.products);
      }
    } catch (err) {
      console.log(err);
    }
  };

  let search = async () => {
    try {
      if (searchQuery !== "") {
        let res = await axios.get(
          "/api/v1/product/searchProduct/" + searchQuery
        );
        if (res.data.res === true) {
          setAllProducts(res.data.docs);
          setSearchQuery("");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div>
      <div className="sell">
        <div className="sell_nav">
          <div className="sell_nav-logo logo">
            Man<span className="span">deal</span>
          </div>
          <div className="search">
            <div className="search-container">
              <input
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
                type="text"
                className="search-container-bar"
                placeholder="Search for Products"
              />
              <div
                onClick={() => {
                  search();
                }}
                className="search-container-icon"
              >
                <img src="/images/icons/search.svg" alt="search" />
              </div>
            </div>
          </div>
          <div className="sell_nav-profile">
            <div>
              <img
                onClick={() => setDrop(!drop)}
                src="/images/icons/avatar.png"
                alt=""
                className="sell_nav-profile-avatar"
              />
              <ProfileDropdown isOpen={drop} />
            </div>
          </div>
        </div>
        <hr className="md mu" />

        <div className="sell_items">
          {allProducts.length !== "" &&
            allProducts.map((pro) => {
              return (
                <div
                  onClick={() => {
                    history.push("/buyerbidding/" + pro._id);
                  }}
                  key={pro._id}
                  className="sell_items-cards"
                >
                  <div className="sell_items-cards--img">
                    <img
                      src={pro.image}
                      className="sell_items-cards--img-i"
                      alt="Lemon"
                    />
                  </div>
                  <div className="sell_items-cards--main">
                    <h2 className="sell_items-cards--main-heading">
                      {pro.name}
                    </h2>
                    <div className="sell_items-cards--main-des">
                      {pro.description}
                    </div>
                    <div className="sell_items-cards--main-name">
                      Sold by {pro.createdBy.name}
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
              );
            })}
        </div>

        <hr className="mu md" />
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default BuyerHomePage;
