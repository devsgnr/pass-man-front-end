import React from "react";
import Logo from "../img/Logo.png";

const style = {
  height: "100vh",
  width: "100%",
};

const styleImg = {
  width: "200px",
};

const Login = () => {
  return (
    <div
      style={style}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <img className="pt-5 pb-5" style={styleImg} alt="Logo" src={Logo} />

      <div className="card w-50 pt-3 pl-5 pr-5 border-0">
        <h1 className="pb-5">Login</h1>

        <form className="w-100">
          <div className="row w-100">
            <div className="col-sm-8 pt-1 pb-3 text-muted">
              <label for="email">Email Address</label>
              <small className="email-error text-danger pl-4"></small>
              <input
                className="form-control email"
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="col-sm-8 pt-1 pb-3 text-muted">
              <label for="password">Password</label>
              <small className="password-error text-danger pl-4"></small>
              <input
                className="form-control password"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>

            <div className="col-sm-12 pt-3 pb-4">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>

            <div className="col-sm-12 text-muted">
              <span>Already have an account?</span>{" "}
              <a href="./signup">Sign Up</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
