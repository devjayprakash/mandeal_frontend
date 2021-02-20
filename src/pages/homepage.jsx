import React from "react";

const Homepage = () => {
  return (
    <div className="home">
      <div className="home_nav nav">
        <div className="home_nav-logo logo">
          Man<span className="span">deal</span>
        </div>
        <div className="home_nav-login">
          <a href="#">Login</a>
        </div>
      </div>

      <div className="home_main">
        <h1 className="home_main-header">
          Welcome to Men<span className="span">deal...</span>
        </h1>
        <div className="home_main-tagline">
          The mordern form of perfect MANDI
        </div>
        <div className="home_main-btn btn-red">Register</div>
      </div>
    </div>
  );
};

export default Homepage;
