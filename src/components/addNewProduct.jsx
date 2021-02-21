import React, { useContext, useState } from "react";
import axios from "axios";
//import { useHistory } from "react-router-dom";
import { AuthContext } from "../app";

const AddNewProduct = ({ fetchProducts }) => {
  let { authRes, setAuthRes } = useContext(AuthContext);
  let [err, setErr] = useState({});
  // let history = useHistory();

  let [product, setProduct] = useState({
    name: "",
    description: "",
    createdBy: "",
    mppk: {
      currency: "Rs.",
      amount: null,
    },
    productImage: null,
  });

  let addProduct = async (e) => {
    //e.preventDefault();

    setProduct({
      ...product,
      createdBy: authRes.userdata._id,
    });
    if (
      product.name !== "" &&
      product.description !== "" &&
      product.createdBy !== "" &&
      product.price !== null &&
      product.productImage !== null
    ) {
      const formData = new FormData();
      formData.append("image", product.productImage);
      formData.append("name", product.name);
      formData.append("description", product.description);
      formData.append("createdBy", authRes.userdata._id);
      formData.append("mppk", JSON.stringify(product.mppk));

      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      let res = await axios.post(
        "/api/v1/product/createProduct",
        formData,
        config
      );

      if (res.data.res) {
        //fetchProducts();
      } else {
        setErr({
          show: true,
          msg: "",
        });
      }
    } else {
      setErr({
        show: true,
        msg: "Please fill all the details and try again",
      });
      console.log(err);
    }

    fetchProducts();
  };
  return (
    <div>
      <div className="sell_new">
        <div className="sell_new-product">
          <h1 className="sell_new-product--header">Create New Product</h1>
          <hr className="md" />
          <input
            onChange={(e) => {
              setProduct({ ...product, name: e.target.value });
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
                setProduct({
                  ...product,
                  mppk: {
                    currency: "Rs.",
                    amount: e.target.value,
                  },
                });
              }}
              type="text"
              className="sell_new-product--c-price "
              placeholder="Price Per kg"
            />
          </div>
          <p>
            Select the image of the product &nbsp;&nbsp;
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setProduct({
                  ...product,
                  productImage: e.target.files[0],
                });
              }}
            />
          </p>
          <br />
          <br />
          <div
            onClick={() => addProduct()}
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
