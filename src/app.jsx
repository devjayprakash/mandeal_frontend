import React, { createContext, useEffect, useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/homepage";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import BuyerHomePage from "./pages/buyerHomePage";
import SellerHomePage from "./pages/sellerHomePage";
import "./style/main.scss";
import { extractCookies } from "./utility";
import axios from "axios";

export let AuthContext = createContext();

const App = () => {
  let [authRes, setAuthRes] = useState({
    auth: false,
    userdata: null,
  });

  let [authDone, setAuthDone] = useState(false);

  let authUser = async () => {
    // console.log(document.cookie);

    if (document.cookie !== null && document.cookie !== "") {
      let token = extractCookies(document.cookie).jwt;

      if (token !== undefined || token !== null || token !== "") {
        try {
          let res = await axios.post("/api/v1/auth/verifyToken", {
            token: token,
          });

          // console.log(res);

          if (res.data.res) {
            setAuthDone(true);
            setAuthRes({
              auth: true,
              userdata: res.data.userdata,
            });
          } else {
            setAuthRes(true);
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        setAuthRes(true);
      }
    } else {
      setAuthDone(true);
    }
  };

  useEffect(() => {
    authUser();
  }, []);

  if (authDone === false) {
    return (
      <div>
        <h1>Loading ...</h1>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ authRes, setAuthRes }}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            render={() => {
              if (authRes.auth === true) {
                if (authRes.userdata.type === "seller") {
                  return <SellerHomePage />;
                } else {
                  return <BuyerHomePage />;
                }
              } else {
                return <Homepage />;
              }
            }}
            path={"/"}
          />
          <Route
            render={() => {
              if (authRes.auth === true) {
                if (authRes.userdata.type === "seller") {
                  return <SellerHomePage />;
                } else {
                  return <BuyerHomePage />;
                }
              } else {
                return <Login />;
              }
            }}
            path={"/login"}
          />
          <Route
            render={() => {
              if (authRes.auth === true) {
                if (authRes.userdata.type === "seller") {
                  return <SellerHomePage />;
                } else {
                  return <BuyerHomePage />;
                }
              } else {
                return <SignUp />;
              }
            }}
            path={"/signup"}
          />
          <Route
            render={() => {
              if (authRes.auth === true) {
                return <BuyerHomePage />;
              } else {
                return <Login />;
              }
            }}
            path={"/buyer"}
          />
          <Route
            render={() => {
              if (authRes.auth === true) {
                return <SellerHomePage />;
              } else {
                return <Login />;
              }
            }}
            path={"/seller"}
          />
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};
export default App;
