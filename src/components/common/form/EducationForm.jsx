import React, { useState } from "react";
import { fetchData, storeData } from "../../../utils/Functions";
import AccordionContainer from "../accordion/AccordionContainer";
import Button from "../button/Button";

import Input from "../input/Input";
function EducationForm() {
  const [data, setData] = useState(() => fetchData("education"));
  const [clearInput, setClearInput] = useState(false);
  // console.log("education", data);
  let tempData = [];
  data.map((item, index) => console.log(item));

  const handleBlur = (id, value) => {
    // console.log("received", id, value);

    tempData.push({ id, value });
    setData(data);
  };
  const handleAdd = () => {
    console.log("Temp data", tempData);
    let d = data;
    d.push(tempData);
    storeData("education", d);
    setData(d);
    setClearInput(true);
  };

  return (
    <div>
      <div className="ui field">
        <AccordionContainer data={data} />
        <Input
          label="Year"
          type="text"
          id="year"
          placeholder="e.g 2018"
          value={""}
          onBlur={handleBlur}
          shouldClearInput={clearInput}
        />
        <Input
          label="Insitute/School"
          type="text"
          id="school"
          placeholder="e.g University of Juba"
          value={""}
          onBlur={handleBlur}
          shouldClearInput={clearInput}
        />
        <Input
          label="Certificate/Award"
          type="text"
          id="award"
          placeholder="e.g BS. Education"
          value={""}
          onBlur={handleBlur}
          shouldClearInput={clearInput}
        />
        <Button text="Add" onClick={handleAdd} />
      </div>
    </div>
  );
}

export default EducationForm;
