import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  let [loginDetail, setLoginDetail] = useState({
    phone: "",
    password: "",
  });

  let [err, setErr] = useState({
    show: false,
    msg: "",
  });

  let loginUser = async () => {
    try {
      let res = await axios.post("/api/v1/auth/login", loginDetail);

      console.log(res);

      if (res.data.res === true) {
        console.log("sucesss");
      } else {
        setErr({
          show: true,
          msg: res.msg,
        });
      }
    } catch (e) {
      setErr({ show: true, msg: "Invalid details provided" });
    }
  };

  return (
    <div>
      <div className="xyz">
        <div className="login">
          <div className="login_nav nav">
            <h1 className="logo">
              Man<span className="span">deal</span>
            </h1>
          </div>

          <div className="login_main">
            <div className="login_main-left">
              <div className="login_main-left--heading">
                <span className="span">Thanks,</span> for Revisiting.
              </div>

              <div className="login_main-left--des">
                Introducing E-Mandi and simplifying Life of Farmer and Consumer.
              </div>
            </div>

            <div className="login_main-right">
              <div className="login_main-right--form">
                <h1 className="login_main-right--form-heading">Login</h1>
                {err.show && (
                  <div style={{ color: "rgb(216, 37, 98)" }}>{err.msg}</div>
                )}
                <input
                  value={loginDetail.phone}
                  onChange={(e) => {
                    setLoginDetail({
                      ...loginDetail,
                      phone: e.target.value,
                    });
                  }}
                  type="text"
                  placeholder="Phone"
                  className="login_main-right--form-email input"
                />
                <br />

                <input
                  value={loginDetail.password}
                  onChange={(e) => {
                    setLoginDetail({
                      ...loginDetail,
                      password: e.target.value,
                    });
                  }}
                  type="password"
                  placeholder="Password"
                  className="login_main-right--form-password input"
                />

                <div className="login_main-right--form-new_user">
                  Or <span>New to mandeal, Register here:-</span>
                </div>

                <div onClick={() => loginUser()} className=" login-btn btn-red">
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
