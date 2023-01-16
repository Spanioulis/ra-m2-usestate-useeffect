import PropTypes from 'prop-types';

export const Label = ({ children, htmlFor }) => {
   return <label htmlFor={htmlFor}>{children}</label>;
};

Label.propTypes = {
   children: PropTypes.node.isRequired,
   htmlFor: PropTypes.string
};
