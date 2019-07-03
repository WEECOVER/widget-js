import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import Button from '../../Button';
import { getModifiers } from '../../../utils/data-mappers';

const Footer = ({ addElement, mainModifier, availableStyles }) => {
  const displayGlobalAddButton =
    availableStyles.single === mainModifier || availableStyles.compressed === mainModifier;
  return (
    <Fragment>
      {displayGlobalAddButton && (
        <div className={getModifiers([mainModifier], 'button-wrapper')}>
          <Button
            modifiers={[mainModifier]}
            onClick={() => addElement({ type: 'global', element: 'all' })}>
            AÑADIR
          </Button>
        </div>
      )}
    </Fragment>
  );
};

Footer.propTypes = {
  mainModifier: propTypes.string.isRequired,
  availableStyles: propTypes.object.isRequired,
  addElement: propTypes.func.isRequired
};

export default Footer;
