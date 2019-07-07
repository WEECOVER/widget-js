import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import Button from '../../Button';
import { getModifiers } from '../../../utils/data-mappers';
import logo from '../../../assets/images/logo.png';

const Footer = ({ addInsuanceToCart, mainModifier, availableStyles }) => {
  const displayGlobalAddButton =
    availableStyles.single === mainModifier || availableStyles.compressed === mainModifier;
  return (
    <Fragment>
      {displayGlobalAddButton && (
        <div className={getModifiers([mainModifier], 'footer-button-wrapper')}>
          <Button
            modifiers={[mainModifier]}
            onClick={() => addInsuanceToCart({ type: 'global', element: 'all' })}>
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
