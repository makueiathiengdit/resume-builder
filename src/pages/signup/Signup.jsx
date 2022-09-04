import React, { useState } from "react";
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
  const [, ,] = useTitle("Sign Up");
  const isMobile = useWindow();
  const handleBlur = (key, value) => {
    data[key] = value;
    setData(data);
  };

  const styles = isMobile ? "ui field" : "ui three column grid";
  console.log(`is mobile: ${isMobile}`);
  const clickHandler = () => {};
  return (
    <>
      <div className="ui contianer">
        <div className={styles}>
          <div className="ui column"></div>
          <div className="ui column">
            <div className="ui form">
              <br></br>
              <br></br>
              <br></br>
              <h3 className="ui horizontal divider header">Sign Up</h3>
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
                placeholder=""
                passedValue={data.password}
                onBlur={handleBlur}
              />
              <Input
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                placeholder=""
                passedValue={data.password}
                onBlur={handleBlur}
              />
              <Button text="Create" onClick={clickHandler} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
