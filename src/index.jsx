import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/homepage";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import BuyerHomePage from "./pages/buyerHomePage";
import SellerHomePage from "./pages/sellerHomePage";
import SellerCard from "./components/sellerCard";
import "./style/main.scss";

let App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact component={Homepage} path={"/"} />
          <Route component={Login} path={"/login"} />
          <Route component={SignUp} path={"/signup"} />
          <Route component={BuyerHomePage} path={"/buyer"} />
          <Route component={SellerHomePage} path={"/seller"} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
