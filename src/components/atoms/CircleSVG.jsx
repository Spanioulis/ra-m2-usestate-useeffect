export const CircleSVG = ({ color, size }) => {
   return (
      <svg width={`${size}px`} height={`${size}px`}>
         <circle cx="50%" cy="50%" r={`${size / 2}px`} fill={`${color}`} />
      </svg>
   );
};
