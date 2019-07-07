import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import Button from '../../Button';
import { getModifiers } from '../../../utils/data-mappers';
import logo from '../../../assets/images/logo.png';

const Footer = ({ addInsuanceToCart, mainModifier, availableStyles, checked, id }) => {
  const displayGlobalAddButton =
    availableStyles.single === mainModifier || availableStyles.compressed === mainModifier;
  const handleSelect = () => {
    addInsuanceToCart({ checked: !checked, id, type: 'single' });
  };

  const getButtonModifiers = () =>
    checked
      ? [Button.availableSizes.sm, Button.availableSizes.selected]
      : [Button.availableSizes.sm];

  return (
    <Fragment>
      {displayGlobalAddButton && (
        <div className={getModifiers([mainModifier], 'footer-button-wrapper')}>
          <Button modifiers={getButtonModifiers()} onClick={() => handleSelect()}>
            AÑADIR
          </Button>
        </div>
      )}
      <div className={getModifiers([mainModifier], 'logo-wrapper')}>
        <span>By </span>
        <img className="logo-image" src={logo} alt="weecover logo" />
      </div>
    </Fragment>
  );
};

Footer.propTypes = {
  mainModifier: propTypes.string.isRequired,
  availableStyles: propTypes.object.isRequired,
  addInsuanceToCart: propTypes.func.isRequired
};

export default Footer;
