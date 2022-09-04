import React from "react";
import Button from "../button/Button";
import Input from "../input/Input";
function EducationForm() {
  let dummyData = {};
  const handleBlur = () => {};
  return (
    <div>
      <div className="ui field">
        <Input
          label="Year"
          type="text"
          id="year"
          placeholder="e.g 2018"
          passedValue={dummyData.firstname}
          onBlur={handleBlur}
        />
        <Input
          label="Insitution"
          type="text"
          id="lastname"
          placeholder="e.g University of Juba"
          passedValue={dummyData.lastname}
          onBlur={handleBlur}
        />
        <Input
          label="Certificate/Award"
          type="text"
          id="award"
          placeholder="e.g BS. Education"
          passedValue={dummyData.lastname}
          onBlur={handleBlur}
        />
        <Button text="Add" />
      </div>
    </div>
  );
}

export default EducationForm;
