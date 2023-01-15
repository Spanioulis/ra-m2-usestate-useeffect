export const InputColor = ({ children, color, handle, name, style, type }) => {
  return (
    <input
      id={children}
      name={name}
      onChange={handle}
      style={style}
      type={type} // Si se llama inputColor, e type debería de ser color y no requerir props
      value={color}
    />
  );
};

// Utiliza prop-types para validar el tipo de dato de las props
