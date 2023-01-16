import PropTypes from 'prop-types';

import { InputColor, Label } from '../atoms';

export const InputColorGroup = ({ color, handle, name }) => {
   return (
      <div>
         <Label htmlFor={`${name}-color`}>color: </Label>
         <InputColor color={color} handle={handle} name="color" id={`${name}-color`} style={{ width: '70px' }} />
      </div>
   );
};

InputColorGroup.propTypes = {
   name: PropTypes.string,
   color: PropTypes.string,
   handle: PropTypes.func
};
