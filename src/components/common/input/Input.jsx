import React, { useState, useRef } from "react";

function Input({
  id,
  label,
  type,
  value = "",
  isPassword = false,
  required = true,
  placeholder,
  onBlur,
}) {
  const [_value, setValue] = useState(value);
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const inputRef = useRef(null);
  const handleChange = (e) => {
    setError(false);
    setValue(e.target.value);
  };
  const handleBlur = () => {
    if (_value.length === 0 && required) {
      setError(true);
      setErrorMessage("field cannot be empty");
      inputRef.current.focus();
      return;
    }
    setError(false);
    onBlur(id, _value);
  };

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  type = showPassword ? "text" : type;

  return (
    <div className="ui field">
      <label htmlFor={id}>{label}</label>
      {isPassword ? (
        <>
          <div className="ui action input">
            <input
              type={type}
              id={id}
              value={_value}
              ref={inputRef}
              placeholder={placeholder}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button className="ui icon button" onClick={handleToggle}>
              {showPassword ? (
                <i className="eye slash icon" />
              ) : (
                <i className="eye icon" />
              )}
            </button>
          </div>
        </>
      ) : (
        <input
          type={type}
          value={_value}
          id={id}
          ref={inputRef}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      )}
      {error && (
        <span className="ui pointing red basic mini label">{errorMessage}</span>
      )}
    </div>
  );
}

export default Input;
