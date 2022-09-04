import React, { useState, useEffect } from "react";
import Accordion from "./Accordion";

function AccordionContainer({ data = [] }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems([
      {
        startDate: "04-2020",
        endDate: "04-2022",
        employer: "Kush Bank",
        jobTitle: "Branch Manager",
        description: [
          "Managing employees",
          "Running branch operations",
          "Making decisions regarding branch and employees",
        ],
      },
      {
        startDate: "04-2020",
        endDate: "04-2022",
        employer: "Kush Bank",
        jobTitle: "Branch Manager",
        description: [
          "Managing employees",
          "Running branch operations",
          "Making decisions regarding branch and employees",
        ],
      },
    ]);
  }, []);

  return (
    <div className="ui container">
      <div className="ui styled fluid accordion">
        {items.length === 0 && <h2>No data</h2>}
        {items.map((item, index) => (
          <Accordion item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default AccordionContainer;
