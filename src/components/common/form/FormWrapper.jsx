import React from "react";

function FormWrapper({ title = "Form", children = "" }) {
  return (
    <div className="ui form">
      <h3 className="ui horizontal divider header">{title}</h3>
      {children}
    </div>
  );
}

export default FormWrapper;
