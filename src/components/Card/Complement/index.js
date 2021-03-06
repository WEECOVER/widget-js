import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CheckBox from '../../CheckBox';
import { getModifiers } from '../../../utils/data-mappers';

import styles from './index.css';

const Complement = ({ onSelect, complements, modifiers }) => {
  const handleSelect = ({ checked, id, insuranceId }) => {
    onSelect({ insuranceId, checked, id, type: 'complement' });
  };

  return (
    <Fragment>
      {complements &&
        complements.map(({ checked, texto: description, price, currency, id, insuranceId }) => (
          <div key={id} className={getModifiers(modifiers, 'complement-wrapper', styles)}>
            <CheckBox
              onClick={({ checked: _checked }) =>
                handleSelect({ checked: _checked, id, insuranceId })
              }
              checked={checked}
            />
            <p className={getModifiers(modifiers, 'complement-description', styles)}>
              {description}{' '}
              <span className={styles['complement-price']}>
                {price}
                {currency}
              </span>
            </p>
          </div>
        ))}
    </Fragment>
  );
};

Complement.propTypes = {
  onSelect: PropTypes.func.isRequired,
  complements: PropTypes.array,
  modifiers: PropTypes.array
};

Complement.defaultProps = {
  modifiers: [],
  complements: []
};

export default Complement;
