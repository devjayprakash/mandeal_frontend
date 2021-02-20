import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddNewProduct = () => {
  let [err, setErr] = useState({});
  let history = useHistory();

  let [product, setProduct] = useState({
    productName: "",
    description: "",
    sellerName: "",
    price: null,
  });

  let addProduct = async () => {
    if (
      product.productName !== "" &&
      product.description !== "" &&
      product.sellerName !== "" &&
      product.price !== null
    ) {
      let res = await axios.post("/api/v1/product/createProduct", product);
      console.log(res.data);
      if (res.data.res) {
      } else {
        setErr({
          show: true,
          msg: "Login f",
        });
      }
    } else {
      setErr({
        show: true,
        msg: "Please full all the details and try again",
      });
      console.log(err);
    }
  };
  return (
    <div>
      <div className="sell_new">
        <div className="sell_new-product">
          <h1 className="sell_new-product--header">Create New Product</h1>
          <hr className="md" />
          <input
            onChange={(e) => {
              setProduct({ ...product, productName: e.target.value });
            }}
            type="text"
            className="sell_new-product--name "
            placeholder="Name Of Product"
          />
          <br />
          <input
            onChange={(e) => {
              setProduct({ ...product, description: e.target.value });
            }}
            type="text"
            className="sell_new-product--des "
            placeholder="Description"
          />
          <div className="sell_new-product--c">
            <input
              onChange={(e) => {
                setProduct({ ...product, sellerName: e.target.value });
              }}
              type="text"
              className="sell_new-product--c-seller "
              placeholder="Name Of Seller"
            />
            <input
              onChange={(e) => {
                setProduct({ ...product, price: e.target.value });
              }}
              type="text"
              className="sell_new-product--c-price "
              placeholder="Price Per kg"
            />
          </div>
          <div
            onClick={() => {
              //   Todo
              addProduct();
            }}
            className="sell-new-product-btn btn-blue"
          >
            Add New Product
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewProduct;
