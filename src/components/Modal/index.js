import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import ModalFrame from './ModalFrame';

const Modal = ({ displayModal, nodeId, enableDisplayModal }) => {
  const wrapperEl = useRef(null);

  useEffect(() => {
    displayModal && document.body.classList.add('disable-scroll');
    !displayModal && document.body.classList.remove('disable-scroll');
  }, [displayModal]);

  const getContainer = () => {
    let nodeContainerEl = document.getElementById(nodeId);
    if (!nodeContainerEl) {
      nodeContainerEl = document.createElement('div');
      nodeContainerEl.id = nodeId;
      document.body.appendChild(nodeContainerEl);
    }
    return nodeContainerEl;
  };

  const handleOutsideClick = event => {
    if (event.target === wrapperEl.current) {
      enableDisplayModal(false);
    }
  };

  const renderWrappedModalFrame = () => (
    <div
      role="button"
      className="widget-modal-wrapper"
      ref={wrapperEl}
      onClick={handleOutsideClick}>
      <ModalFrame />
    </div>
  );
  return displayModal ? createPortal(renderWrappedModalFrame(), getContainer()) : null;
};

Modal.propTypes = {
  nodeId: PropTypes.string,
  displayModal: PropTypes.bool
};

Modal.defaultProps = {
  nodeId: 'widget-modal-root',
  displayModal: false
};

export default Modal;
