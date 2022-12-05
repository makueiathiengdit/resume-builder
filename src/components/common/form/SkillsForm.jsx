import React, { useState } from "react";
import { fetchData, storeData } from "../../../utils/Functions";
import SimpleAccordionContainer from "../accordion/SimpleAccordionContainer";
import Button from "../button/Button";
import Input from "../input/Input";
let count = 0;

function SkillsForm() {
  const [_id, setId] = useState(count);
  const [data, setData] = useState(() => fetchData("skills"));
  const handleAdd = () => {
    count++;
    setId(count);
    storeData("skills", data);
  };

  const handleBlur = (id, value) => {
    let d = data;
    d.push(value);
    setData(d);
  };
  return (
    <div className="ui field">
      <SimpleAccordionContainer data={data} icon="yellow map marker" />
      <Input
        label="Enter skill"
        type="text"
        id={_id}
        placeholder="e.g public speaking"
        value=""
        onBlur={handleBlur}
        shouldClearInput={true}
      />
      <Button text="Add" onClick={handleAdd} />
    </div>
  );
}

export default SkillsForm;
