import PropTypes from 'prop-types';

export const InputColor = ({ id, color, handle, name, style }) => {
   return <input id={id} name={name} onChange={handle} style={style} type="color" value={color} />;
};

InputColor.propTypes = {
   color: PropTypes.string,
   handle: PropTypes.func,
   id: PropTypes.string,
   name: PropTypes.string,
   style: PropTypes.object
};
