import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CheckBox from '../../CheckBox';

const Complement = ({ onSelectComplement, complements }) => (
  <Fragment>
    {complements &&
      complements.map(({ checked, description, price, currency, id }) => (
        <div key={id} className="complement-wrapper">
          <CheckBox onClick={onSelectComplement} checked={checked} />
          <p className="complement-description">
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
  onSelectComplement: PropTypes.func,
  complements: PropTypes.array.isRequired
};

Complement.defaultProps = {
  onSelectComplement: () => {}
};

export default Complement;
