import React from "react";

const Label = ({ children, info }) => {
  return (
    <label>
      {children} {info}{" "}
    </label>
  );
};

export default Label;
