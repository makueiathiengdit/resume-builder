import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/common/button/Button";
import Input from "../../components/common/input/Input";
import useTitle from "../../hooks/useTitle";
import Header from "../../layout/header/Header";
import {
  validatePassword,
  validateConfirmPassword,
  validateEmail,
} from "../../constants/Constants";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, ,] = useTitle("Login");
  const Redirect = useNavigate();

  const handleClick = () => {
    console.log("Redirecting to home...");
    console.log(username, password);
    Redirect("/home");
  };
  return (
    <div className="ui container">
      <div className="ui field">
        <br></br>
        <br></br>
        <Header />
        <br></br>
        <br></br>
        <div className="ui raised centered card">
          <div className="ui content">
            <div className="ui form">
              <h3 className="ui horizontal divider header">Login</h3>
              <div className="ui field">
                <Input
                  id="username"
                  label="Username"
                  type="text"
                  value={username}
                  placeholder="e.g deng@gmail.com"
                  required={true}
                  onBlur={(id, value) => setUsername(value)}
                />
                <Input
                  id="password"
                  label="Password"
                  type="password"
                  value={password}
                  placeholder="Enter your password"
                  required={true}
                  isPassword={true}
                  onBlur={(id, value) => setPassword(value)}
                />
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
              <div className="ui field">
                <Button text="Login" onClick={handleClick} />
              </div>
            </div>
            <br></br>
            <div className="extra content">
              <span className="text blue">
                New here? <Link to="/sign-up">Sign up</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
