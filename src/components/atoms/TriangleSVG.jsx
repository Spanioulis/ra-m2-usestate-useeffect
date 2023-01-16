import PropTypes from 'prop-types';

export const TriangleSVG = ({ color, size }) => {
   return (
      <svg width={`${size}px`} height={`${size}px`}>
         <polygon
            points={`${size / 2} ${size * 0.14},
          ${size} ${size}, 0 ${size}`}
            fill={color}
         />
      </svg>
   );
};

TriangleSVG.propTypes = {
   size: PropTypes.number,
   color: PropTypes.string
};
