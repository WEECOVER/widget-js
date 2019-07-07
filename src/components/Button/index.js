import React from 'react';
import PropTypes from 'prop-types';
import { getModifiers } from '../../utils/data-mappers';

const availableSizes = {
  sm: 'sm',
  selected: 'selected',
  default: ''
};

const Button = ({ children, onClick, modifiers }) => (
  <button type="button" className={getModifiers(modifiers, 'button')} onClick={onClick}>
    {children}
  </button>
);

Button.availableSizes = availableSizes;

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onClick: PropTypes.func.isRequired,
  modifiers: PropTypes.arrayOf(PropTypes.string)
};

Button.defaultProps = {
  modifiers: []
};

export default Button;
