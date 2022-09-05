import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/common/input/Input";
import Button from "../../components/common/button/Button";
function ChangePassword() {
  const Redirect = useNavigate();
  const handleClick = () => {
    console.log("Redirecting to login...");
    Redirect("/login");
  };
  return (
    <div className="ui container">
      <div className="ui field">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="ui raised centered card">
          <div className="ui content">
            <div className="ui form">
              <h3 className="ui horizontal divider header">Change Password</h3>
              <div className="ui field">
                <Input
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  required={true}
                />
                <Input
                  id="password"
                  label="Confirm Password"
                  type="password"
                  placeholder="Enter your password"
                  required={true}
                />
              </div>
              <div className="ui field">
                <Button text="Change Password" onClick={handleClick} />
              </div>
            </div>
            <br></br>
            <div className="extra content">
              <span className="text blue">
                New here? <Link to="/login">Login</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
