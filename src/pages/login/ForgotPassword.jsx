import React from "react";
import Button from "../../components/common/button/Button";
import FormWrapper from "../../components/common/form/FormWrapper";
import Input from "../../components/common/input/Input";
import useTitle from "../../hooks/useTitle";
function ForgotPassword() {
  const [, ,] = useTitle("Forgot password");

  return (
    <div className="ui container">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <FormWrapper title="Reset password">
        <div className="ui fields">
          <Input
            type="email"
            label="Enter your email"
            placeholder="e.g deng@gmail.com"
            required={true}
          />
        </div>
        <div className="ui fields">
          <div className="ui centered field">
            <Button text="Reset Password" />
          </div>
        </div>
      </FormWrapper>
    </div>
  );
}

export default ForgotPassword;
