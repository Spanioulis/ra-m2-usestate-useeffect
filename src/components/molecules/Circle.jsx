import { CircleSVG, InputColor, InputNumber, Label } from "../atoms";

// Este componente lo subiria a nivel de organisms
// Validar las props, con propTypes
export const Circle = ({ children, size, color, handle }) => {
  return (
    <>
      <div style={{ display: "block", marginBottom: "8px" }}>
        <h2>{children}</h2>
        <div
          style={{
            minHeight: "200px",
            display: "grid",
            placeContent: "center",
          }}
        >
          <CircleSVG color={color} size={size} />
        </div>
        <div style={{ margin: "10px" }}>
          {/* Crear en moleculas un InputNumberGroup que agrupe label + inputNumber */}
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
          {/* Crear en moleculas un InputColorGroup que agrupe label + inputColor */}
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
      </div>
    </>
  );
};
