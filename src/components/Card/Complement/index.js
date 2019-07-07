import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CheckBox from '../../CheckBox';
import { getModifiers } from '../../../utils/data-mappers';

const Complement = ({ onSelect, complements, modifiers }) => (
  <Fragment>
    {complements &&
      complements.map(({ checked, description, price, currency, id }) => (
        <div key={id} className={getModifiers(modifiers, 'complement-wrapper')}>
          <CheckBox onClick={onSelect} checked={checked} />
          <p className={getModifiers(modifiers, 'complement-description')}>
            {description}{' '}
            <span className="complement-price">
              {price}
              {currency}
            </span>
          </p>
        </div>
      ))}
  </Fragment>
);

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
