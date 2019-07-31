import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import ModalFrame from './ModalFrame';

const Modal = ({ displayModal, nodeId, enableDisplayModal, children, uniqueWidgetId }) => {
  const wrapperEl = useRef(null);

  const getContainer = () => {
    const nodeContainerEl = document.getElementById(uniqueWidgetId);
    const node = document.createElement('div');
    node.id = nodeId;
    nodeContainerEl.appendChild(node);

    return node;
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
      {children}
    </div>
  );
  return displayModal ? createPortal(renderWrappedModalFrame(), getContainer()) : null;
};

Modal.propTypes = {
  nodeId: PropTypes.string,
  displayModal: PropTypes.bool,
  children: PropTypes.object.isRequired
};

Modal.Frame = ModalFrame;

Modal.defaultProps = {
  nodeId: 'widget-modal-root',
  displayModal: false
};

export default Modal;
