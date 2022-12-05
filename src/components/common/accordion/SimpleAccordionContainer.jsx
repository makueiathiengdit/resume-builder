import React from "react";
import SimpleAccordion from "./SimpleAccordion";

function SimpleAccordionContainer({ data = [], icon = "" }) {
  return (
    <div className="ui container">
      <div className="ui middle aligned selection list">
        {/* {data.length === 0 && <h2>No data</h2>} */}
        {data.map((item, index) => (
          <SimpleAccordion id={index} item={item} icon={icon} />
        ))}
      </div>
    </div>
  );
}

export default SimpleAccordionContainer;
