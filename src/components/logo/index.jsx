import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ nav }) => {
  return (
    <Link to="/">
      {nav ? (
        <div className="home_nav-logo logo">
          Man
          <span className="span">deal</span>
        </div>
      ) : (
        <div className="logo-n">
          Man<span className="span">deal</span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
