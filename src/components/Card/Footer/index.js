import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';

const Footer = ({ mainModifier, availableStyles, element, addElement }) => (
  <Fragment>
    {mainModifier === availableStyles.uncompressed && (
      <Button
        onClick={() =>
          addElement({
            type: 'single',
            element
          })
        }
        modifiers={[Button.availableSizes.sm]}>
        AÑADIR
      </Button>
    )}
  </Fragment>
);

Footer.propTypes = {
  mainModifier: PropTypes.string.isRequired,
  availableStyles: PropTypes.object.isRequired,
  element: PropTypes.object.isRequired,
  addElement: PropTypes.func.isRequired
};

export default Footer;
