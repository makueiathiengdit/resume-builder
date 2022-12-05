import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "../../components/common/input/Input";
import Button from "../../components/common/button/Button";
import ErrorBoundary from "../../components/errors/ErrorBoundary";
import FormWrapper from "../../components/common/form/FormWrapper";
import useTitle from "../../hooks/useTitle";
function ChangePassword() {
  const Redirect = useNavigate();
  const [, ,] = useTitle("Change password");
  const handleClick = () => {
    console.log("Redirecting to login...");
    Redirect("/login");
  };
  const handleBlur = (id, value) => {
    console.log(id, value);
  };

  return (
    <div className="ui container">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="ui raised centered card">
        <div className="content">
          <FormWrapper title="Create Password">
            <ErrorBoundary>
              <div className="middle aligned meta">
                <p>Create new password</p>
              </div>
              <br></br>
              <div className="ui field">
                <Input
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="Enter new password"
                  required={true}
                  isPassword={true}
                  onBlur={handleBlur}
                />
                <Input
                  id="comfirmpassword"
                  label="Confirm Password"
                  type="password"
                  placeholder="Enter your password"
                  required={true}
                  isPassword={true}
                  onBlur={handleBlur}
                />
              </div>
              <div className="ui field">
                <Button text="Change Password" onClick={handleClick} />
              </div>
            </ErrorBoundary>
          </FormWrapper>
          <br></br>
          <div className="extra content">
            <span className="text blue">
              Changed your mind? <Link to="/login">Login</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
