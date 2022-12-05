import React from "react";
import Accordion from "./Accordion";

function AccordionContainer({ data = [] }) {
  console.log(data);
  return (
    <div className="ui container">
      <div className="ui styled fluid accordion">
        {data.length === 0 && <h2>No data</h2>}

        {data.map((item, index) => (
          <Accordion
            title={item.year}
            body={
              <div>
                <h4>School: {item.school}</h4>
                <h4>Award: {item.award}</h4>{" "}
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
}

export default AccordionContainer;
