import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ nav }) => {
  return (
    <Link to="/">
      {nav ? (
        <div className="home_nav-logo logo">
          <font size="24">M</font>an
          <span className="span">
            <font size="24">d</font>eal
          </span>
        </div>
      ) : (
        <div className="logo">
          Man<span className="span">deal</span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
