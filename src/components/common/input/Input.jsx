import React, { useState } from "react";

function Input({
  id,
  label,
  type,
  value,
  required = true,
  placeholder,
  onBlur,
}) {
  const [_value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="ui field">
      <label htmlFor={id}>
        {label}
        <input
          type={type}
          value={value}
          id={id}
          placeholder={placeholder}
          required={required}
          onChange={handleChange}
          onBlur={() => {
            onBlur(id, _value);
          }}
        />
      </label>
      {_value.length === 0 && required && (
        <span className="ui pointing red basic mini label">
          field cannot be empty
        </span>
      )}
    </div>
  );
}

export default Input;
