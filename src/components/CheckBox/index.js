import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const CheckBox = ({ onClick, size }) => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckBox = ({ target: { checked } }) => {
    onClick({ checked });
    setChecked(checked);
  };

  const CheckBoxClassName = classnames(`checkbox checkbox--${size}`, {
    'checkbox--checked': isChecked
  });

  return <input className={CheckBoxClassName} type="checkbox" onClick={handleCheckBox} />;
};

CheckBox.propTypes = {
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOfType(['small', 'medium', 'large'])
};

CheckBox.defaultProps = {
  size: 'small'
};

export default CheckBox;
