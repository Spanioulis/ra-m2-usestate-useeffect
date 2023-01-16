import PropTypes from 'prop-types';

export const InputColor = ({ color, handle, name, style }) => {
   return <input id={name} name={name} onChange={handle} style={style} type="color" value={color} />;
};

InputColor.propTypes = {
   color: PropTypes.string,
   handle: PropTypes.func,
   name: PropTypes.string,
   style: PropTypes.object
};
