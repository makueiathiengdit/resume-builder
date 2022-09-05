import React, { useState, useLayoutEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/common/button/Button";
import Input from "../../components/common/input/Input";
import useTitle from "../../hooks/useTitle";
import useWindow from "../../hooks/useWindow";
const dummyData = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};
function Signup() {
  const [data, setData] = useState(dummyData);
  const [styles, setStyles] = useState("ui column");
  const [, ,] = useTitle("Sign Up");
  const isMobile = useWindow();

  const Redirect = useNavigate();
  const handleBlur = (key, value) => {
    data[key] = value;
    setData(data);
  };

  useLayoutEffect(() => {
    if (isMobile) setStyles("ui column");
    else setStyles("ui three column grid");
  }, [isMobile]);

  const clickHandler = () => {
    console.log("Redirecting...");
    Redirect("/login");
  };
  return (
    <>
      <div className="ui contianer">
        <br></br>
        <br></br>
        <br></br>
        <div className={styles}>
          <div className="column"></div>
          <div className="column">
            <div className="ui raised centered fluid card">
              <div className="content">
                <div className="ui form">
                  <div className="header">
                    <h3 className="ui horizontal divider header">Sign Up</h3>
                  </div>
                  <br></br>
                  <div className="ui field">
                    <Input
                      label="First Name"
                      type="text"
                      id="firstname"
                      placeholder="e.g Garang"
                      passedValue={data.firstname}
                      onBlur={handleBlur}
                    />
                    <Input
                      label="Last Name"
                      type="text"
                      id="lastname"
                      placeholder="e.g Garang"
                      passedValue={data.lastname}
                      onBlur={handleBlur}
                    />
                    <Input
                      label="Email Address"
                      type="email"
                      id="email"
                      placeholder="e.g garang@gmail.com"
                      passedValue={data.email}
                      onBlur={handleBlur}
                    />
                    <Input
                      label="Password"
                      type="password"
                      id="password"
                      placeholder="Enter password"
                      passedValue={data.password}
                      onBlur={handleBlur}
                    />
                    <Input
                      label="Confirm Password"
                      type="password"
                      id="confirmPassword"
                      placeholder="Enter confirm password"
                      passedValue={data.password}
                      onBlur={handleBlur}
                    />
                    <div>
                      <Button text="Sign Up" onClick={clickHandler} />
                    </div>
                  </div>
                  <div className="extra content">
                    Already have account?{" "}
                    <span>
                      <Link to="/login">Login</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column"></div>
        </div>
      </div>
    </>
  );
}

export default Signup;
