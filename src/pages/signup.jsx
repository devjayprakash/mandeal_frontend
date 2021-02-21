import axios from "axios";
import React, { useContext, useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { setAuth, setUserData } from "../store/actions";
import { AuthContext } from "../app";

const SignUp = ({ setAuthStore, setUserDataStore }) => {
  let history = useHistory();

  let { authRes, setAuthRes } = useContext(AuthContext);

  let [authData, setAuthData] = useState({
    name: "",
    phone: "",
    password: "",
    type: "",
  });

  let [err, setErr] = useState({
    show: false,
    msg: "",
  });

  let signUpUser = async () => {
    if (
      authData.name !== "" &&
      authData.phone !== "" &&
      authData.password !== "" &&
      authData.type !== ""
    ) {
      let res = await axios.post("/api/v1/auth/signup", authData);
      console.log(res);
      if (res.data.res) {
        setAuthRes({
          auth: res.data.res,
          userdata: res.data.userdata,
        });

        history.push("/seller");
      } else {
        setErr({
          show: true,
          msg: res.data.msg,
        });
      }
    } else {
      setErr({
        show: true,
        msg: "Please full all the details and try again",
      });
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
            value={authData.phone}
            onChange={(e) => {
              setAuthData({
                ...authData,
                phone: e.target.value,
              });
            }}
            type="text"
            placeholder="Phone number"
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
            />
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

          <div onClick={() => signUpUser()} className="reg_form-btn btn-red">
            Register
          </div>
          <p
            style={{
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            or Already Registered,{" "}
            <Link to="/login">
              {" "}
              <span className="span">Login Here :-</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

let mapProps = (state) => {
  return {
    auth: state.auth,
    userdata: state.userdata,
  };
};

let mapActions = (dispatch) => {
  return {
    setAuthStore: (payload) => {
      return dispatch(setAuth(payload));
    },
    setUserDataStore: (payload) => {
      return dispatch(setAuth(payload));
    },
  };
};

export default connect(mapProps, mapActions)(SignUp);
