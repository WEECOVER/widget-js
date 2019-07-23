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
  warranties,
  noIncludedWarranties,
  price,
  currency,
  onSelect,
  displayCheckbox,
  displayAddButton,
  modifiers,
  checked,
  textButton,
  tooltip,
  tooltipGrupoSeguro: description
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
        <Price title={title} modifiers={modifiers} price={price} currency="€" />
        {displayAddButton && (
          <div className={getModifiers(modifiers, 'card-add-button-container')}>
            <Button modifiers={getButtonModifiers()} onClick={handleSelect}>
              {textButton}
            </Button>
          </div>
        )}
      </div>
      <div className="card-title-description">
        <p>{description}</p>
        <ul>
          {warranties.map(warranty => (
            <li>{warranty}</li>
          ))}
          {noIncludedWarranties.map(warranty => (
            <li className="warrany-not-included">{warranty}</li>
          ))}
        </ul>
        <button type="button" className="card-tooltip-modal" onClick={enableDisplayModal}>
          i
        </button>
        <Modal displayModal={displayModal} enableDisplayModal={enableDisplayModal}>
          <Modal.Frame>
            <div>{tooltip}</div>
          </Modal.Frame>
        </Modal>
      </div>
    </Fragment>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  warranties: PropTypes.array.isRequired,
  noIncludedWarranties: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  displayCheckbox: PropTypes.bool,
  displayAddButton: PropTypes.bool,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  textButton: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
  tooltipGrupoSeguro: PropTypes.string.isRequired
};

Title.defaultProps = {
  displayCheckbox: false,
  displayAddButton: false,
  modifiers: [],
  checked: false
};

export default Title;
