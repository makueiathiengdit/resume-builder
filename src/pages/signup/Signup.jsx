import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import Button from "../../components/common/button/Button";
import FormWrapper from "../../components/common/form/FormWrapper";
import Input from "../../components/common/input/Input";
import ErrorBoundary from "../../components/errors/ErrorBoundary";
import useTitle from "../../hooks/useTitle";
import Header from "../../layout/header/Header";
import {
  validateName,
  validatePassword,
  validateConfirmPassword,
  validateEmail,
} from "../../utils/Functions";

const dummyData = {
  firstname: "Garang",
  lastname: "Deng",
  email: "deng@gmail.com",
  password: "",
  confirmPassword: "",
};

const POPUP_DELAY = 1000;
function Signup() {
  const [data, setData] = useState(dummyData);

  const [, ,] = useTitle("Sign Up");

  const Redirect = useNavigate();
  const handleBlur = (key, value) => {
    console.log(key, value);
    data[key] = value;
    setData(data);
  };

  const clickHandler = () => {
    console.log("data: ", data);

    if (
      validateName(data.firstname) &&
      validateName(data.lastname) &&
      validateEmail(data.email) &&
      validatePassword(data.password) &&
      validateConfirmPassword(data.password, data.confirmPassword)
    ) {
      console.log("Redirecting...");
      let promise = new Promise(function (resolve, reject) {
        setTimeout(() => resolve("done"), POPUP_DELAY);
      });
      notify(promise, "account");
      setTimeout(() => {
        Redirect("/login");
      }, POPUP_DELAY * 2);
    } else {
      alert("There are errors in the form");
    }
  };

  let toastId = null;
  const notify = (promise, message) => {
    toastId = toast.promise(promise, {
      loading: "creating account",
      success: `${message} created successfully`,
      error: `Error creating ${message}`,
      id: message,
    });
    toast.remove(toastId);
  };

  return (
    <>
      <div className="ui contianer">
        <br></br>
        <Header />
        <br></br>
        <br></br>
        <Toaster />
        <div className="ui raised centered card">
          <div className="content">
            <ErrorBoundary>
              <FormWrapper title="Sign up">
                <div className="ui field">
                  <Input
                    label="First Name"
                    type="text"
                    id="firstname"
                    placeholder="e.g Garang"
                    value={data.firstname}
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Last Name"
                    type="text"
                    id="lastname"
                    placeholder="e.g Garang"
                    value={data.lastname}
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    id="email"
                    placeholder="e.g garang@gmail.com"
                    value={data.email}
                    onBlur={handleBlur}
                  />
                  <Input
                    label="Password"
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    value={data.password}
                    onBlur={handleBlur}
                    isPassword={true}
                  />
                  <Input
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    placeholder="Enter confirm password"
                    value={data.password}
                    onBlur={handleBlur}
                    isPassword={true}
                  />
                  <div>
                    <Button text="Sign Up" onClick={clickHandler} />
                  </div>
                </div>
                <div className="extra content">
                  Already have account? <Link to="/login">Login</Link>
                </div>
              </FormWrapper>
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
