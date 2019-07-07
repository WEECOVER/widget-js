import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CheckBox from '../../CheckBox';
import Button from '../../Button';
import { getModifiers } from '../../../utils/data-mappers';
import Price from './Price';

const Title = ({
  id,
  title,
  description,
  price,
  currency,
  onSelect,
  displayCheckbox,
  displayAddButton,
  modifiers,
  checked
}) => {
  const handleSelect = () => {
    onSelect({ checked: !checked, id, type: 'insurance' });
  };

  const getButtonModifiers = () =>
    checked
      ? [Button.availableSizes.sm, Button.availableSizes.selected]
      : [Button.availableSizes.sm];

  return (
    <Fragment>
      <div className={getModifiers(modifiers, 'card-title-container')}>
        {displayCheckbox && (
          <CheckBox checked={checked} onClick={handleSelect} size={CheckBox.availableSizes.large} />
        )}
        <Price title={title} modifiers={modifiers} price={price} currency={currency} />
        {displayAddButton && (
          <div className={getModifiers(modifiers, 'card-add-button-container')}>
            <Button modifiers={getButtonModifiers()} onClick={handleSelect}>
              Añadir
            </Button>
          </div>
        )}
      </div>
      <p className="card-title-description">{description}</p>
    </Fragment>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  displayCheckbox: PropTypes.bool,
  displayAddButton: PropTypes.bool,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool
};

Title.defaultProps = {
  displayCheckbox: false,
  displayAddButton: false,
  modifiers: [],
  checked: false
};

export default Title;
