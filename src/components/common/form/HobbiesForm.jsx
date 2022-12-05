import React, { useState } from "react";
import { fetchData, storeData } from "../../../utils/Functions";
import SimpleAccordionContainer from "../accordion/SimpleAccordionContainer";
import Button from "../button/Button";
import Input from "../input/Input";
let count = 0;
function HobbiesForm() {
  const [_id, setId] = useState(count);

  const [data, setData] = useState(() => fetchData("hobbies"));
  const handleAdd = () => {
    count++;
    setId(count);
    storeData("hobbies", data);
  };

  const handleBlur = (id, value) => {
    let d = data;
    d.push(value);
    setData(d);
  };
  return (
    <div className="ui field">
      <SimpleAccordionContainer data={data} icon="blue futbol" />
      <Input
        label="Enter hobby"
        type="text"
        id={_id}
        placeholder="e.g reading novels"
        value={""}
        onBlur={handleBlur}
        shouldClearInput={true}
      />
      <Button text="Add" onClick={handleAdd} />
    </div>
  );
}

export default HobbiesForm;
