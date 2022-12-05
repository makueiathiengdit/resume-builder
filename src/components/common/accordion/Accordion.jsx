import React, { useState } from "react";
function Accordion({ title, body }) {
  const [isActive, setIsActive] = useState(false);
  console.log("Called with: ", title);
  const toggle = (e) => {
    setIsActive(!isActive);
    console.log(e);
  };
  return (
    <>
      <div className={`${isActive ? "active" : ""} title`} onClick={toggle}>
        <i className="dropdown icon"></i>
        {title}
        {/* <span>
          {item?.startDate + " - " + item?.endDate + " " + item?.jobTitle}
        </span> */}
      </div>
      <div className={`${isActive ? "active" : ""} content`}>
        {/* <h5 className="header">Responsibilities</h5> */}
        {/* <ul className="ui list">
          {item?.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul> */}
        {body}
      </div>
    </>
  );
}

// TODO: Refactor Accordion to make more flexible and resuable
// Receive header and body or content

export default Accordion;
