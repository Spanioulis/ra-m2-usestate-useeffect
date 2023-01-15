export const SquareSVG = ({ color, size }) => {
  return (
    <svg width={`${size}px`} height={`${size}px`}>
      <rect width={`${size}px`} height={`${size}px`} fill={color} />
    </svg>
  );
};

// Utiliza prop-types para validar el tipo de dato de las props
