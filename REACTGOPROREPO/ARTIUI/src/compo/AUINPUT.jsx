// src/components/global/Input.jsx
import React from "react";

export default function Input({
  label,
  leftICON,
  rightICON,
  version = "default",
  placeholder = "",
  disabled = false,
  type = "text",
  value,
  onChange,
}) {
  return (
    <div className={`au-input au-input-${version}`}>
      {label && <label className="au-input-label">{label}</label>}

      <div className="au-input-wrapper">
        {leftICON && <span className="au-input-icon left">{leftICON}</span>}

        <input
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}
          className="au-input-field"
        />

        {rightICON && <span className="au-input-icon right">{rightICON}</span>}
      </div>
    </div>
  );
}
