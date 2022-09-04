import React from "react";

function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className="ui fluid primary button">
      {text}
    </button>
  );
}

export default Button;
