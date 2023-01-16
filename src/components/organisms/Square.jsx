import PropTypes from 'prop-types';

import { InputColorGroup, InputNumberGroup } from '../molecules';
import { SquareSVG } from '../atoms';

export const Square = ({ children, size, color, handle }) => {
   return (
      <div style={{ display: 'block', marginBottom: '8px' }}>
         <h2>{children}</h2>
         <div style={{ minHeight: '200px', display: 'grid', placeContent: 'center' }}>
            <SquareSVG color={color} size={size} />
         </div>
         <InputNumberGroup handle={handle} size={size} name={children} />
         <InputColorGroup handle={handle} color={color} name={children} />
      </div>
   );
};

Square.propTypes = {
   children: PropTypes.node.isRequired,
   size: PropTypes.number,
   color: PropTypes.string,
   handle: PropTypes.func
};
