import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import { getModifiers } from '../../../utils/data-mappers';
import logo from '../../../assets/images/logo.png';

import styles from './index.css';

const Footer = ({ addInsuranceToCart, mainModifier, availableStyles, insurances }) => {
  const displayGlobalAddButton = availableStyles.single === mainModifier;

  const anyChecked = insurances.some(({ checked }) => checked);

  const getButtonModifiers = () => {
    const modifiers = [];

    mainModifier === 'single' && modifiers.push(Button.availableSizes.sm);
    anyChecked && modifiers.push(Button.availableModifiers.selected);

    return modifiers;
  };
  return (
    <Fragment>
      {displayGlobalAddButton && (
        <div className={getModifiers([mainModifier], 'footer-button-wrapper', styles)}>
          <Button
            disabled={!(anyChecked || mainModifier === 'single')}
            modifiers={getButtonModifiers()}
            onClick={event => addInsuranceToCart({ ...event, type: 'add', checked: !anyChecked })}>
            {anyChecked ? 'AÑADIDO' : 'AÑADIR'}
          </Button>
        </div>
      )}
      <div className={getModifiers([mainModifier], 'logo-wrapper', styles)}>
        <span>By </span>
        <img className={styles['logo-image']} src={logo} alt="weecover logo" />
      </div>
    </Fragment>
  );
};

Footer.propTypes = {
  mainModifier: PropTypes.string.isRequired,
  availableStyles: PropTypes.object.isRequired,
  addInsuranceToCart: PropTypes.func.isRequired,
  insurances: PropTypes.array.isRequired
};

export default Footer;
