import PropTypes from 'prop-types';

import { InputNumber, Label } from '../atoms';

export const InputNumberGroup = ({ name, handle, size }) => {
   return (
      <div style={{ margin: '10px' }}>
         <Label htmlFor={name}>size: </Label>
         <InputNumber handle={handle} name={name} size={size} style={{ width: '50px' }} />
      </div>
   );
};

InputNumberGroup.propTypes = {
   handle: PropTypes.func,
   name: PropTypes.string,
   size: PropTypes.number
};
