import PropTypes from 'prop-types';

export const InputNumber = ({ handle, name, size, style }) => {
   return <input id={name} name={name} onChange={handle} style={style} type="number" value={size} />;
};

InputNumber.propTypes = {
   handle: PropTypes.func,
   name: PropTypes.string,
   size: PropTypes.number,
   style: PropTypes.object
};
