import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from '../../CheckBox';

const Complement = ({ onSelectComplement }) => (
  <div className="complement-wrapper">
    <CheckBox onClick={onSelectComplement} />
    <p className="complement-description">
      Praesent tincidunt aliquet urna por <span className="price">XX,XX€</span>
    </p>
  </div>
);

Complement.propTypes = {
  onSelectComplement: PropTypes.func.isRequired
};

export default Complement;
