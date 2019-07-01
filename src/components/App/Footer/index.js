import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import Button from '../../Button';

const Footer = ({ displayGlobalAddButton, addElement }) => (
  <Fragment>
    {displayGlobalAddButton && (
      <div className="button-wrapper">
        <Button onClick={() => addElement({ type: 'global', element: 'all' })}>AÑADIR</Button>
      </div>
    )}
  </Fragment>
);

Footer.propTypes = {
  displayGlobalAddButton: propTypes.bool.isRequired,
  addElement: propTypes.func.isRequired
};

export default Footer;
