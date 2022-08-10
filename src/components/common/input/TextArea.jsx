import React from "react";

function TextArea({
  id,
  label,
  placeholder,
  value,
  rows,
  required,
  onChange,
  onBlur,
}) {
  return (
    <div className="ui field">
      <label htmlFor={id}>
        {label}
        <textarea
          id={id}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
        >
          {value ?? placeholder}
        </textarea>
      </label>
    </div>
  );
}

export default TextArea;
