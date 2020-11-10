import React, { useState } from "react";
import "../../styles/auth.scss";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { loginApi } from "../../api";
import { storeData } from "../../utils";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const [email, setEmail] = useState("admin1@mail.com");
  const [password, setPassword] = useState("123");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()

  const onLoginClick = async (e) => {
    e.preventDefault();
    let data = {
      email: email,
      password: password,
    };
    setLoading(true);
    await loginApi(data)
      .then((res) => {
        console.log(res);
        setLoading(false);
        let response = res.data;
        if (response.status === 200) {
          setError(null);
          storeData("userData", response.result);
          dispatch({type:"LOGIN"})
        } else {
          setError(response.error);
        }
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

  return (
    <div className="login-container">
      <h4 className="title-login">Sign in</h4>
      <p className="text-login">Sign in to continue to Chat.</p>
      <div className="card-login">
        <form onSubmit={onLoginClick}>
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
                className="form-control"
                id="email"
                placeholder="Enter Email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                className="form-control"
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <small id="emailHelp" className="form-text text-danger">
                {error}
              </small>
            )}
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
{
  loading && <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
}
          

            Sign In
          </button>
        </form>
      </div>
      <p className="text-login bottom">Don't have an account ?</p>
    </div>
  );
};

export default LoginPage;
