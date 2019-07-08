import React from 'react';
import PropTypes from 'prop-types';
import { getModifiers } from '../../utils/data-mappers';

const availableSizes = {
  sm: 'sm',
  default: ''
};

const availableModifiers = {
  selected: 'selected',
  disabled: 'disabled'
};

const Button = ({ children, onClick, modifiers, disabled }) => (
  <button
    type="button"
    className={getModifiers(modifiers, 'button')}
    onClick={e => {
      if (disabled) return;
      onClick(e);
    }}>
    {children}
  </button>
);

Button.availableSizes = availableSizes;
Button.availableModifiers = availableModifiers;

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onClick: PropTypes.func.isRequired,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.bool
};

Button.defaultProps = {
  modifiers: [],
  disabled: false
};

export default Button;
