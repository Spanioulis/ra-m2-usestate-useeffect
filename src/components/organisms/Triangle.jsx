import PropTypes from 'prop-types';

import { InputColorGroup, InputNumberGroup } from '../molecules';
import { TriangleSVG } from '../atoms';

export const Triangle = ({ children, size, color, handle }) => {
   return (
      <div style={{ display: 'block', marginBottom: '8px' }}>
         <h2>{children}</h2>
         <div style={{ minHeight: '200px', display: 'grid', placeContent: 'center' }}>
            <TriangleSVG color={color} size={size} />
         </div>
         <InputNumberGroup name={children} handle={handle} size={size} />
         <InputColorGroup name={children} handle={handle} color={color} />
      </div>
   );
};

Triangle.propTypes = {
   children: PropTypes.node.isRequired,
   size: PropTypes.number,
   color: PropTypes.string,
   handle: PropTypes.func
};
