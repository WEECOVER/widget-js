import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CheckBox from '../../CheckBox';

const Title = ({ title, description, price, currency, onSelectComplement }) => (
  <Fragment>
    <div className="card-title-container">
      <CheckBox onClick={onSelectComplement} />
      <h3 className="card-title-text">
        {title}{' '}
        <span className="card-title-price">
          {price} {currency}
        </span>
      </h3>
    </div>
    <p className="card-title-description">{description}</p>
  </Fragment>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  onSelectComplement: PropTypes.func.isRequired
};

export default Title;
