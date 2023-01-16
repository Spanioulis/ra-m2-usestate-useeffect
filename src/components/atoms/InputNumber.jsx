import PropTypes from 'prop-types';

export const InputNumber = ({ handle, id, name, size, style }) => {
   return <input id={id} name={name} onChange={handle} style={style} type="number" value={size} />;
};

InputNumber.propTypes = {
   handle: PropTypes.func,
   name: PropTypes.string,
   id: PropTypes.string,
   size: PropTypes.number,
   style: PropTypes.object
};
