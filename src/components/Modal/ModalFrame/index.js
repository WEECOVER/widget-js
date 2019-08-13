import React from 'react';
import PropTypes from 'prop-types';
import styles from '../index.css';

const ModalFrame = ({ children }) => (
  <div className={styles['modal-frame']}>
    <div>{children}</div>
  </div>
);

ModalFrame.propTypes = {
  children: PropTypes.node.isRequired
};

export default ModalFrame;
