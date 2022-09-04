import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/common/button/Button";

import Input from "../../components/common/input/Input";
import useTitle from "../../hooks/useTitle";
import useWindow from "../../hooks/useWindow";
function Login() {
  const [, ,] = useTitle("Login");
  const isMobile = useWindow();
  const styles = isMobile ? "ui field" : "ui two column grid";
  return (
    <div className="ui container">
      <div className={styles}>
        <div className="ui cloumn"></div>
        <div className="ui column">
          <div className="ui form">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h3 className="ui horizontal divider header">Login</h3>
            <div className="ui field">
              <Input
                id="username"
                label="Username"
                type="text"
                placeholder="e.g deng@gmail.com"
                required={true}
              />
              <Input
                id="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
                required={true}
              />
            </div>
            <Link to="/forgot-password">Forgot Password?</Link>
            <div className="ui field">
              <Button text="Login" />
            </div>
          </div>
        </div>
        <div className="ui column"></div>
      </div>
    </div>
  );
}

export default Login;
