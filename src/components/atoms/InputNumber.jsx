export const InputNumber = ({ children, handle, name, size, style, type }) => {
  return (
    <input
      id={children}
      name={name}
      onChange={handle}
      style={style}
      type={type} // Si se llama inputNumber, e type debería de ser number y no requerir props
      value={size}
    />
  );
};

// Utiliza prop-types para validar el tipo de dato de las props
