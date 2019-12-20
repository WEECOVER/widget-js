import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';
import CheckBox from '../../CheckBox';
import Button from '../../Button';
import { getModifiers } from '../../../utils/data-mappers';
import Price from './Price';
import Modal from '../../Modal';

import styles from './index.css';

const Title = ({
  id,
  title,
  warranties,
  noIncludedWarranties,
  price,
  uniqueWidgetId,
  onSelect,
  displayCheckbox,
  displayAddButton,
  modifiers,
  checked,
  textButton,
  tooltip,
  textoModal
}) => {
  const buttonAddText = textButton || (checked ? 'AÑADIDO' : 'AÑADIR');
  const modalText = tooltip || textoModal;

  const [displayModal, setDisplayModal] = useState(false);
  const handleSelect = () => {
    onSelect({ checked: !checked, id, type: 'insurance' });
  };

  const getButtonModifiers = () =>
    checked
      ? [Button.availableSizes.sm, Button.availableModifiers.selected]
      : [Button.availableSizes.sm];

  const enableDisplayModal = () => {
    setDisplayModal(!displayModal);
  };

  return (
    <Fragment>
      <div className={getModifiers(modifiers, 'card-title-container', styles)}>
        {displayCheckbox && (
          <CheckBox checked={checked} onClick={handleSelect} size={CheckBox.availableSizes.large} />
        )}
        <Price title={title} modifiers={modifiers} price={price} currency="€" />
        {displayAddButton && (
          <div className={getModifiers(modifiers, 'card-add-button-container', styles)}>
            <Button modifiers={getButtonModifiers()} onClick={handleSelect}>
              {buttonAddText}
            </Button>
          </div>
        )}
      </div>
      <div className={styles['card-title-description']}>
        <button type="button" className={styles['card-tooltip-modal']} onClick={enableDisplayModal}>
          i
        </button>

        <ul className={styles['card-title-description-list']}>
          {warranties.map(warranty => (
            <li className={styles['card-title-description-list-item']} key={uuidv1()}>
              {warranty}
            </li>
          ))}
          {noIncludedWarranties.map(warranty => (
            <li
              key={uuidv1()}
              className={`${styles['card-title-description-list-item']} ${styles['warrany-not-included']}`}>
              {warranty}
            </li>
          ))}
        </ul>

        <Modal
          uniqueWidgetId={uniqueWidgetId}
          displayModal={displayModal}
          enableDisplayModal={enableDisplayModal}>
          <Modal.Frame text={modalText} />
        </Modal>
      </div>
    </Fragment>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  uniqueWidgetId: PropTypes.string.isRequired,
  warranties: PropTypes.array.isRequired,
  noIncludedWarranties: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  displayCheckbox: PropTypes.bool,
  displayAddButton: PropTypes.bool,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  textButton: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
  textoModal: PropTypes.string
};

Title.defaultProps = {
  displayCheckbox: false,
  displayAddButton: false,
  modifiers: [],
  checked: false,
  textoModal: ''
};

export default Title;
