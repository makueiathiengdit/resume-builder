import React, { Children } from "react";
function FormContainer({ children = "" }) {
  return <div className="ui container">{children}</div>;
}

export default FormContainer;
