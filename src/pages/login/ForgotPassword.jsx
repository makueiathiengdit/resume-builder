import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/common/button/Button";
import FormWrapper from "../../components/common/form/FormWrapper";
import Input from "../../components/common/input/Input";
import ErrorBoundary from "../../components/errors/ErrorBoundary";
import useTitle from "../../hooks/useTitle";
function ForgotPassword() {
  const [, ,] = useTitle("Forgot password");
  const Redirect = useNavigate();
  const handleClick = () => {
    console.log("Redirecting to login...");
    Redirect("/change-password");
  };
  return (
    <div className="ui container">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="ui centered card">
        <div className="content">
          <ErrorBoundary>
            <FormWrapper title="Reset password">
              <div className="meta">
                <p>
                  Forgot your account's password? Enter your email address and
                  we'll send you a recovery link.
                </p>
              </div>
              <br></br>
              <div className="ui field">
                <Input
                  type="email"
                  label="Email"
                  placeholder=" Enter your email e.g deng@gmail.com"
                  required={true}
                />
              </div>
              <div className="ui field">
                <Button text="Reset Password" onClick={handleClick} />
              </div>
            </FormWrapper>
          </ErrorBoundary>
          <br></br>
          <div className="extra content">
            Changed your mind? <Link to="/login"> Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
