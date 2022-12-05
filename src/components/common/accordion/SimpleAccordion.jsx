import React from "react";

const SimpleAccordion = ({ id, item, icon = "yellow map marker" }) => {
  return (
    <div className="item">
      {icon ? <i className={`${icon} icon`}></i> : id + 1} {"- "}
      {item.charAt(0).toUpperCase() + item.slice(1)}
    </div>
  );
};

export default SimpleAccordion;
