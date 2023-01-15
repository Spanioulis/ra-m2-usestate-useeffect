import React from "react";

export const Label = ({ children, info }) => {
  return (
    // falta htmlFor
    <label>
      {/* Aquí debería de ser solo children, el info sobra. */}
      {children} {info}{" "}
    </label>
  );
};

// Utiliza prop-types para validar el tipo de dato de las props
