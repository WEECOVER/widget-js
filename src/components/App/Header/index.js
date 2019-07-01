import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Header = ({ availableStyles, mainModifier, mainTitle, mainDescription }) => (
  <Fragment>
    {availableStyles.single !== mainModifier && (
      <header className="header">
        <h1 className="header-title">{mainTitle}</h1>
        <p className="header-subtitle">{mainDescription}</p>
      </header>
    )}
  </Fragment>
);

Header.propTypes = {
  availableStyles: PropTypes.object.isRequired,
  mainModifier: PropTypes.string.isRequired,
  mainTitle: PropTypes.string.isRequired,
  mainDescription: PropTypes.string.isRequired
};

export default Header;
