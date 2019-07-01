import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CheckBox from '../../CheckBox';
import Button from '../../Button';

const Title = ({
  title,
  description,
  price,
  currency,
  onSelectComplement,
  displayCheckbox,
  displayAddButton
}) => (
  <Fragment>
    <div className="card-title-container">
      {displayCheckbox && (
        <CheckBox onClick={onSelectComplement} size={CheckBox.availableSizes.large} />
      )}
      <h3 className="card-title-text">
        {title}{' '}
        <span className="card-title-price">
          {price} {currency}
        </span>
      </h3>
      {displayAddButton && <Button onClick={onSelectComplement}>Añadir</Button>}
    </div>
    <p className="card-title-description">{description}</p>
  </Fragment>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  onSelectComplement: PropTypes.func,
  displayCheckbox: PropTypes.bool,
  displayAddButton: PropTypes.bool
};

Title.defaultProps = {
  onSelectComplement: () => {},
  displayCheckbox: false,
  displayAddButton: false
};

export default Title;
