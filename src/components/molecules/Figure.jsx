import React from "react";
import FigureSVG from "../atoms/FigureSVG";
import InputColor from "../atoms/InputColor";
import InputNumber from "../atoms/InputNumber";
import Label from "../atoms/Label";

const Figures = ({ children, color, handle, size, style }) => {
  return (
    <>
      <h3>{children}</h3>
      <div style={{ minHeight: "125px", padding: "25px" }}>
        <FigureSVG style={style} />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <Label children={children} info="size:" />
        <InputNumber
          children={children}
          handle={handle}
          name="size"
          size={size}
          style={{ width: "50px" }}
          type="number"
        />
      </div>
      <div>
        <Label children={children} info="color:" />
        <InputColor
          children={children}
          color={color}
          handle={handle}
          name="color"
          style={{ width: "70px" }}
          type="color"
        />
      </div>
    </>
  );
};

export default Figures;
