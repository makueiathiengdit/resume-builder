import React from "react";
import Button from "../button/Button";
import Input from "../input/Input";

function ReferencesForm() {
  const references_data = [{ name: "", occupation: "", email: "" }];
  const handleAdd = () => {};
  return (
    <div className="ui field">
      <Input
        label="Name"
        type="text"
        id="name"
        placeholder="Enter name"
        passedValue={references_data[0].name}
      />
      <Input
        label="Occupation"
        type="text"
        id="occupation"
        placeholder="Enter occupation e.g Director"
        passedValue={references_data[0].occupation}
      />
      <Input
        label="Email"
        type="email"
        id="email"
        placeholder="Enter email address"
        passedValue={references_data[0].email}
      />

      <Button text="Add" onClick={handleAdd} />
    </div>
  );
}

export default ReferencesForm;
