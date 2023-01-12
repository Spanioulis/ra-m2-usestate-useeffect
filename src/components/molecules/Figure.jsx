import React from "react";

const Figure = ({ children, size, color, handle, style }) => {
  return (
    <>
      <h3>{children}</h3>
      <div style={{ minHeight: "150px" }}>
        <p style={style}></p>
      </div>
      <div style={{ marginBottom: "10px" }}>
        {/* Crea un componente para label */}
        <label>{children} size: </label>
        {/* Crea un componente para input, uno de InputNumber y otro de InputColor */}
        <input
          id={children}
          name="size"
          onChange={handle}
          style={{ width: "50px" }}
          type="number"
          value={size}
        />
      </div>
      <div>
        <label>{children} color: </label>
        <input
          name="color"
          onChange={handle}
          style={{ width: "70px" }}
          type="color"
          value={color}
        />
      </div>
    </>
  );
};

export default Figure;
