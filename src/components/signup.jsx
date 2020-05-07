import React from "react";
import Logo from "../img/Logo.png";

const style = {
  height: "100vh",
  width: "100%",
};

const styleImg = {
  width: "200px",
};

const SignUp = () => {
  return (
    <div
      style={style}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <img className="pt-5 pb-5" style={styleImg} alt="Logo" src={Logo} />

      <div className="card w-50 pt-3 pl-5 pr-5 border-0">
        <h1 className="pb-5">Sign Up</h1>

        <form className="w-100">
          <div className="row w-100">
            <div className="col-sm-8 pt-1 pb-3 text-muted">
              <label for="name">Full Name</label>
              <small className="name-error text-danger pl-4"></small>
              <input
                className="form-control full-name"
                type="text"
                name="name"
                placeholder="Full Name"
                required
              />
            </div>

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

            <div className="col-sm-8 pt-1 pb-3 text-muted">
              <label for="repeat-password">Repeat Password</label>
              <small className="repeat-password-error text-danger pl-4"></small>
              <input
                className="form-control repeat-password"
                type="password"
                name="repeat-password"
                placeholder="Repeat Password"
                required
              />
            </div>

            <div className="col-sm-12 pt-3 pb-4">
              <button className="btn btn-primary" type="submit">
                Sign up
              </button>
            </div>

            <div className="col-sm-12 text-muted">
              <span>Already have an account?</span> <a href="./login">Login</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
