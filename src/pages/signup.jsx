import React, { useState } from "react";

const SignUp = () => {
  let [authData, setAuthData] = useState({
    name: "",
    email: "",
    password: "",
    type: "",
  });

  let [err, setErr] = useState({
    show: false,
    msg: "",
  });

  let signUpUser = () => {
    if (
      authData.name !== "" &&
      authData.email !== "" &&
      authData.password !== "" &&
      authData.type !== ""
    ) {
    } else {
    }
  };

  return (
    <div className="bgpic">
      <div className="reg">
        <div className="reg_nav nav">
          <h1 className="logo">
            Man<span className="span">deal</span>
          </h1>
        </div>

        <div className="reg_form">
          <h1 className="reg_form-heading">
            Register to Worlds First <span className="span-pink">E-Mandi</span>
          </h1>
          {err.show && (
            <div
              style={{
                color: "rgb(216, 37, 98)",
              }}
            >
              {err.msg}
            </div>
          )}
          <input
            value={authData.name}
            onChange={(e) => {
              setAuthData({
                ...authData,
                name: e.target.value,
              });
            }}
            type="text"
            placeholder="Name"
            className="reg_form-name input"
          />
          <br />
          <input
            value={authData.email}
            onChange={(e) => {
              setAuthData({
                ...authData,
                email: e.target.value,
              });
            }}
            type="email"
            placeholder="Email Id"
            className="reg_form-email input"
          />
          <br />
          <input
            value={authData.password}
            onChange={(e) => {
              setAuthData({
                ...authData,
                password: e.target.value,
              });
            }}
            type="password"
            placeholder="Create Password"
            className="reg_form-pass input"
          />
          <br />

          <div className="reg_form-role">
            <p>Register As:</p>
            <input
              name="type"
              onChange={(e) => {
                if (e.target.checked) {
                  setAuthData({
                    ...authData,
                    type: "buyer",
                  });
                }
              }}
              type="radio"
              placeholder="Buyer"
              className="reg_form-role--buyer"
            />{" "}
            <p
              style={{
                color: "#D82562",
              }}
            >
              Buyer
            </p>
            <input
              name="type"
              onChange={(e) => {
                if (e.target.checked) {
                  setAuthData({
                    ...authData,
                    type: "seller",
                  });
                }
              }}
              type="radio"
              placeholder="Seller"
              className="reg_form-role--seller"
            />{" "}
            <p
              style={{
                color: "#7959D3",
              }}
            >
              Seller
            </p>
          </div>

          <div className="reg_form-btn btn-red">Register</div>
          <p
            style={{
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            or Already Registered, <span className="span">Login Here :-</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
