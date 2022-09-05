import React from "react";

function Button({ text, onClick, classList = "ui fluid primary button" }) {
  return (
    <button onClick={onClick} className={classList}>
      {text}
    </button>
  );
}

export default Button;
