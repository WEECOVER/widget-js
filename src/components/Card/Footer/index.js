import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';

const Footer = ({ mainModifier, availableStyles, element, addInsuranceToCart, checked }) => {
  const getButtonModifiers = () =>
    checked
      ? [Button.availableSizes.sm, Button.availableModifiers.selected]
      : [Button.availableSizes.sm];
  return (
    <Fragment>
      {mainModifier === availableStyles.uncompressed && (
        <Button
          onClick={() =>
            addInsuranceToCart({
              type: 'single',
              id: element.id,
              checked: !checked
            })
          }
          modifiers={getButtonModifiers()}>
          AÑADIR
        </Button>
      )}
    </Fragment>
  );
};

Footer.propTypes = {
  mainModifier: PropTypes.string.isRequired,
  availableStyles: PropTypes.object.isRequired,
  element: PropTypes.object.isRequired,
  addInsuranceToCart: PropTypes.func.isRequired,
  checked: PropTypes.bool
};

Footer.defaultProps = {
  checked: false
};

export default Footer;
