import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CheckBox from '../../CheckBox';
import Button from '../../Button';
import { getModifiers } from '../../../utils/data-mappers';

const Title = ({
  title,
  description,
  price,
  currency,
  onSelectComplement,
  displayCheckbox,
  displayAddButton,
  modifiers
}) => (
  <Fragment>
    <div className="card-title-container">
      {displayCheckbox && (
        <CheckBox onClick={onSelectComplement} size={CheckBox.availableSizes.large} />
      )}
      <h3 className={`card-title-text ${getModifiers(modifiers, 'card-title-text')}`}>
        {title} {modifiers.includes('single') && <br />}
        <span className="card-title-price">
          {modifiers.includes('single') ? (
            <Fragment>
              <span className="card-title-price-prefix">por </span>
              {price}
            </Fragment>
          ) : (
            price
          )}{' '}
          {currency}
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
  displayAddButton: PropTypes.bool,
  modifiers: PropTypes.arrayOf(PropTypes.string)
};

Title.defaultProps = {
  onSelectComplement: () => {},
  displayCheckbox: false,
  displayAddButton: false,
  modifiers: []
};

export default Title;
