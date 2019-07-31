import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { getModifiers } from '../../../utils/data-mappers';
import Modal from '../../Modal';

const Header = ({
  availableStyles,
  mainModifier,
  mainTitle,
  mainDescription,
  tooltipGrupoSeguro,
  uniqueWidgetId
}) => {
  const [displayModal, setDisplayModal] = useState(false);
  const enableDisplayModal = (status = null) => {
    status && setDisplayModal(status);
    !status && setDisplayModal(!displayModal);
  };
  return (
    <Fragment>
      {availableStyles.single !== mainModifier && (
        <header className={getModifiers([mainModifier], 'header')}>
          <h1 className="header-title">{mainTitle}</h1>
          <p className="header-subtitle">
            {mainDescription}
            <button type="button" className="header-tooltip-modal" onClick={enableDisplayModal}>
              i
            </button>
          </p>
          <Modal
            uniqueWidgetId={uniqueWidgetId}
            displayModal={displayModal}
            enableDisplayModal={enableDisplayModal}>
            <Modal.Frame>
              <div>{tooltipGrupoSeguro}</div>
            </Modal.Frame>
          </Modal>
        </header>
      )}
    </Fragment>
  );
};

Header.propTypes = {
  availableStyles: PropTypes.object.isRequired,
  mainModifier: PropTypes.string.isRequired,
  mainTitle: PropTypes.string,
  mainDescription: PropTypes.string,
  tooltipGrupoSeguro: PropTypes.string.isRequired,
  uniqueWidgetId: PropTypes.string.isRequired
};

Header.defaultProps = {
  mainTitle: '',
  mainDescription: ''
};

export default Header;
