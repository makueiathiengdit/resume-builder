import React from "react";
import Input from "../input/Input";
function PersonalInfoForm() {
  const dummyData = {
    firstname: "",
    lastname: "",
    email: "",
    bio: "",
    mobile: "",
    city: "",
    country: "",
    socialMedia: [],
    image: "",
  };
  const handleBlur = () => {};
  return (
    <>
      <div className="ui field">
        <div className="ui two fields">
          <Input
            label="First Name"
            type="text"
            id="firstname"
            placeholder="e.g Garang"
            passedValue={dummyData.firstname}
            onBlur={handleBlur}
          />
          <Input
            label="Last Name"
            type="text"
            id="lastname"
            placeholder="e.g Garang"
            passedValue={dummyData.lastname}
            onBlur={handleBlur}
          />
        </div>
      </div>
      <div className="ui field">
        <div className="ui two fields">
          <Input
            label="Email Address"
            type="email"
            id="email"
            placeholder="e.g garang@gmail.com"
            passedValue={dummyData.email}
            onBlur={handleBlur}
          />
          <Input
            label="Mobile Number"
            type="tel"
            id="mobile"
            placeholder="e.g +211-920-000-000"
            passedValue={dummyData.mobile}
            onBlur={handleBlur}
          />
        </div>
      </div>
    </>
  );
}

export default PersonalInfoForm;
