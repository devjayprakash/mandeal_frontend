import React, { createContext, useEffect, useState } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Homepage from "./pages/homepage";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import BuyerHomePage from "./pages/buyerHomePage";
import SellerHomePage from "./pages/sellerHomePage";
import "./style/main.scss";
import { extractCookies } from "./utility";
import axios from "axios";
import SellerBiddingPage from "./pages/sellerbiddingPage";
import Buyerbidding from "./pages/buyerbiddingPage";
import Profile from "./pages/Profile";
import Documentation from "./pages/docs";

export let AuthContext = createContext();

const App = () => {
  let [authRes, setAuthRes] = useState({
    auth: false,
    userdata: null,
  });

  let [authDone, setAuthDone] = useState(false);

  let authUser = async () => {
    if (document.cookie !== null && document.cookie !== "") {
      let token = extractCookies(document.cookie).jwt;

      if (token !== undefined || token !== null || token !== "") {
        try {
          let res = await axios.post("/api/v1/auth/verifyToken", {
            token: token,
          });

          if (res.data.res) {
            setAuthRes({
              auth: true,
              userdata: res.data.userdata,
            });
            setAuthDone(true);
          } else {
            setAuthRes({
              auth: false,
              userdata: null,
            });

            setAuthDone(true);
          }
        } catch (err) {
          setAuthRes({
            auth: false,
            userdata: null,
          });
          console.log(err);
          setAuthDone(true);
        }
      } else {
        setAuthRes({
          auth: false,
          userdata: null,
        });
        setAuthDone(true);
      }
    } else {
      setAuthRes({
        auth: false,
        userdata: null,
      });
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
                if (authRes.userdata.type === "seller") {
                  return <Redirect to={"/seller"} />;
                } else {
                  return <BuyerHomePage />;
                }
              } else {
                return <Login />;
              }
            }}
            path={"/buyer"}
          />
          <Route
            render={() => {
              if (authRes.auth === true) {
                if (authRes.userdata.type === "seller") {
                  return <SellerHomePage />;
                } else {
                  return <Redirect to={"/buyer"} />;
                }
              } else {
                return <Login />;
              }
            }}
            path={"/seller"}
          />
          <Route
            path={"/buyerbidding/:productId"}
            render={() => {
              if (authRes.auth === true) {
                if (authRes.userdata.type === "seller") {
                  return (
                    <h1>
                      Invalid request. Please go to seller bidding by selecting
                      any product.
                    </h1>
                  );
                } else {
                  return <Buyerbidding />;
                }
              } else {
                return <Login />;
              }
            }}
          />
          <Route
            path={"/sellerbidding/:productId"}
            render={() => {
              if (authRes.auth === true) {
                if (authRes.userdata.type === "seller") {
                  return <SellerBiddingPage />;
                } else {
                  return (
                    <h1>
                      Invalid request. Please go to buyer bidding by selecting
                      any product.
                    </h1>
                  );
                }
              } else {
                return <Login />;
              }
            }}
          />
          <Route path={"/profile"} component={Profile} />
          <Route path={"/docs"} component={Documentation} />
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

let mapProps = (state) => {
  return {
    auth: state.auth,
    userdata: state.userdata,
  };
};

export default App;
