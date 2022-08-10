import React from "react";

function Spinner({ text = "loading..." }) {
  return <div className="ui active centered inline loader"></div>;
}

export default Spinner;
