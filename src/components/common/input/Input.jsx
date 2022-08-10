import React from "react";

function Input({
  id,
  label,
  type,
  value,
  required,
  placeholder,
  onChange,
  onBlur,
}) {
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
          onChange={onChange}
          onBlur={onBlur}
        />
      </label>
    </div>
  );
}

export default Input;
