import React from 'react';
import PropTypes from 'prop-types';

const ModalFrame = ({ children }) => (
  <div className="modal-frame">
    <div>{children}</div>
  </div>
);

ModalFrame.propTypes = {
  children: PropTypes.node.isRequired
};

export default ModalFrame;
