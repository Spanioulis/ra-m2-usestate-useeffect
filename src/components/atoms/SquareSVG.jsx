import PropTypes from 'prop-types';

export const SquareSVG = ({ color, size }) => {
   return (
      <svg width={`${size}px`} height={`${size}px`}>
         <rect width={`${size}px`} height={`${size}px`} fill={color} />
      </svg>
   );
};

SquareSVG.propTypes = {
   size: PropTypes.number,
   color: PropTypes.string
};
