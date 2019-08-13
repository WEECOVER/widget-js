import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './index.css';

const availableSize = {
  small: 'small',
  medium: 'medium',
  large: 'large'
};

const CheckBox = ({ onClick, size, checked }) => {
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  const handleCheckBox = ({ target: { checked: _checked } }) => {
    onClick({ checked: _checked });
    setChecked(_checked);
  };

  const CheckBoxClassName = classnames(`${[styles.checkbox]} ${[styles[`checkbox--${size}`]]}`, {
    [styles['checkbox--checked']]: isChecked
  });

  return <input className={CheckBoxClassName} type="checkbox" onClick={handleCheckBox} />;
};

CheckBox.availableSizes = availableSize;

CheckBox.propTypes = {
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  checked: PropTypes.bool
};

CheckBox.defaultProps = {
  size: 'small',
  checked: false
};

export default CheckBox;
