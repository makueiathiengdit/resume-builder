import React from "react";
import Input from "../input/Input";

function SkillsForm() {
  const skillsData = [];
  const handleBlur = () => {};
  return (
    <div className="ui field">
      <Input
        label=""
        type="text"
        id="0"
        placeholder="enter skill e.g public speaking"
        passedValue={skillsData[0]}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default SkillsForm;
