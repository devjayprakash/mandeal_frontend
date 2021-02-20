import React from "react";

const Login = () => {
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
                Introducing E-Maindi and simplifying Life of Farmer and
                Consumer.
              </div>
            </div>

            <div className="login_main-right">
              <div className="login_main-right--form">
                <h1 className="login_main-right--form-heading">Login</h1>
                <input
                  type="email"
                  placeholder="Email ID"
                  className="login_main-right--form-email input"
                />
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  className="login_main-right--form-password input"
                />

                <div className="login_main-right--form-new_user">
                  Or <span>New to mandeal, Register here:-</span>
                </div>

                <div className=" login-btn btn-red">Login</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
