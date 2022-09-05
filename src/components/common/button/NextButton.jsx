import React from "react";

function NextButton({ text, direction = "right", onClick }) {
  return (
    <button
      className={`ui ${direction} floated ${direction} labeled icon blue button`}
      onClick={onClick}
    >
      <i className={`${direction} arrow icon`}></i>
      {text}
    </button>
  );
}

export default NextButton;
