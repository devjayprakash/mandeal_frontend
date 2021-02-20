import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/logo";

const Homepage = () => {
  return (
    <div className="home">
      <div className="home_nav nav">
        <Logo nav />
        <div className="home_nav-login">
          <Link to={"/login"}>Login</Link>
        </div>
      </div>

      <div className="home_main">
        <h1 className="home_main-header">
          Welcome to &nbsp;
          <Logo />
        </h1>
        <div className="home_main-tagline">
          The mordern form of perfect MANDI
        </div>
        <Link to={"/signup"}>
          <div className="home_main-btn btn-red">Register</div>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
