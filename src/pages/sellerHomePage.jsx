import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../app";
import AddNewProduct from "../components/addNewProduct";
import ProfileDropdown from "../components/dropdown";
import SellerCard from "../components/sellerCard";

const SellerHomePage = () => {
  let [allSellerProducts, setAllSellerProducts] = useState([]);

  let { authRes, setAuthRes } = useContext(AuthContext);

  let fetchSellerProducts = async () => {
    try {
      let res = await axios.get(
        "/api/v1/product/getAllProducts/" + authRes.userdata._id
      );

      setAllSellerProducts(res.data.products);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchSellerProducts();
  }, []);

  let [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <div>
      <div className="sell">
        <div className="sell_nav">
          <div className="sell_nav-logo logo">
            Man<span className="span">deal</span>
          </div>
          <div className="sell_nav-profile">
            <div>
              <ProfileDropdown isOpen={isDropDownOpen} />
            </div>
            <img
              onClick={() => {
                setIsDropDownOpen(!isDropDownOpen);
              }}
              src="./images/icons/avatar.png"
              alt=""
              className="sell_nav-profile-avatar"
            />
          </div>
        </div>
        <hr />
        <h1 className="sell_heading">Your Products</h1>
        <div className="sell_items">
          {allSellerProducts.length !== 0 &&
            allSellerProducts.map((pro, i) => {
              return <SellerCard id={i} data={pro} />;
            })}
        </div>

        <hr className="mu md" />

        <AddNewProduct fetchProducts={fetchSellerProducts} />
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default SellerHomePage;
