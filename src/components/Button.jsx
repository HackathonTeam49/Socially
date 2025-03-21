import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ type, children, onClick, className }) => {
  return (
    <button
      className={`custom-button ${type === 'regular' ? 'regular-btn' : 'volunteer-btn'} ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['regular', 'volunteer']).isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
};

export default Button;