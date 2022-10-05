import React from "react";

function PasswordInput({ onClick, showPassword, ref, ...rest }) {
  return (
    <div className="ui action input">
      <input {...rest} ref={ref} />
      <button className="ui icon button" onClick={onClick}>
        {showPassword ? (
          <i className="eye slash icon" />
        ) : (
          <i className="eye icon" />
        )}
      </button>
    </div>
  );
}

export default PasswordInput;
