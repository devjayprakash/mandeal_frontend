import React, { useState } from "react";
import axios from "axios";
import Logo from "../components/logo";

const Login = () => {
  let [authData, setAuthData] = useState({
    phone: "",
    password: "",
  });

  let [err, setErr] = useState({
    show: false,
    msg: "",
  });

  let loginUser = async () => {
    if (authData.phone !== "" && authData.password !== "") {
      let res = await axios.post("/api/v1/auth/login", authData);
      if (res.res) {
        console.log("sucess");
      } else {
        console.log("failed");
      }
    } else {
      setErr({
        show: true,
        msg: "Please full all the details and try again",
      });
    }
  };

  return (
    <div>
      <div className="xyz">
        <div className="login">
          <div className="login_nav nav">
            <Logo nav />
          </div>
          <div className="login_main">
            <div className="login_main-left">
              <div className="login_main-left--heading">
                <span className="span">Thanks,</span> for Revisiting.
              </div>
              <div className="login_main-left--des">
                Introducing E-Maindi and simplifying Life of Farmer and
                Consumer.
              </div>
            </div>

            <div className="login_main-right">
              <div className="login_main-right--form">
                <h1 className="login_main-right--form-heading">Login</h1>
                <input
                  value={authData.phone}
                  onChange={(e) => {
                    setAuthData({
                      ...authData,
                      phone: e.target.value,
                    });
                  }}
                  type="text"
                  placeholder="Phone Number"
                  className="login_main-right--form-email input"
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
                  placeholder="Password"
                  className="login_main-right--form-password input"
                />

                <div className="login_main-right--form-new_user">
                  New to mandeal? <span> Register Now</span>
                </div>
                <div
                  onClick={() => {
                    console.log("trying to login");
                    loginUser();
                  }}
                  className=" login-btn btn-red"
                >
                  Login
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
