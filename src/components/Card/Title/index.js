import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import CheckBox from '../../CheckBox';
import Button from '../../Button';
import { getModifiers } from '../../../utils/data-mappers';
import Price from './Price';
import Modal from '../../Modal';

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
  const [displayModal, setDisplayModal] = useState(false);
  const handleSelect = () => {
    onSelect({ checked: !checked, id, type: 'insurance' });
  };

  const getButtonModifiers = () =>
    checked
      ? [Button.availableSizes.sm, Button.availableModifiers.selected]
      : [Button.availableSizes.sm];

  const enableDisplayModal = (status = null) => {
    status && setDisplayModal(status);
    !status && setDisplayModal(!displayModal);
  };

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
              {checked ? 'Añadido' : 'Añadir'}
            </Button>
          </div>
        )}
      </div>
      <p className="card-title-description">
        {description}
        <button type="button" className="card-tooltip-modal" onClick={enableDisplayModal}>
          i
        </button>
        <Modal displayModal={displayModal} enableDisplayModal={enableDisplayModal} />
      </p>
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
