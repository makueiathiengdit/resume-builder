import React from "react";

function Error({ error = "something went wrong" }) {
  return (
    <div className="ui negative message">
      <h4 className="header">Error</h4>
      <p className="content">{error}</p>
    </div>
  );
}

export default Error;
