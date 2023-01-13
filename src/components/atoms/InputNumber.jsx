import React from "react";

const InputNumber = ({ children, handle, name, size, style, type }) => {
  return (
    <input
      id={children}
      name={name}
      onChange={handle}
      style={style}
      type={type}
      value={size}
    />
  );
};

export default InputNumber;
