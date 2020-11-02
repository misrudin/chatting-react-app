import React from "react";
import "../../styles/auth.scss";
import { FaUserAlt, FaLock } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="login-container">
      <h4 className="title-login">Sign in</h4>
      <p className="text-login">Sign in to continue to Chat.</p>
      <div className="card-login">
        <form>
          <div className="form-group">
            <label className="lable" htmlFor="email">
              Email
            </label>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <FaUserAlt />
                </div>
              </div>
              <input
                type="email"
                className="form-control is-valid"
                id="email"
                placeholder="Enter Email"
                autoComplete="off"
              />
            </div>

            {/* <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small> */}
          </div>
          <div className="form-group">
            <label className="lable" htmlFor="password">
              Password
            </label>
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <FaLock />
                </div>
              </div>
              <input
                type="password"
                className="form-control is-invalid"
                id="password"
                placeholder="Enter Password"
              />
            </div>

            {/* <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small> */}
          </div>

          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="remember-me"
              />
              <label className="form-check-label" htmlFor="remember-me">
                Remember me
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block login-btn">
            Sign In
          </button>
        </form>
      </div>
      <p className="text-login bottom">Don't have an account ?</p>
    </div>
  );
};

export default LoginPage;
