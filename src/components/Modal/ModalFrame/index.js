import React from 'react';
import PropTypes from 'prop-types';
import styles from '../index.css';

const renderModalItems = items => (
  <div className={styles.coberturas}>
    {items.map(
      text =>
        text.trim() &&
        text !== 'COBERTURAS' &&
        text !== 'EXCLUSIONES' && (
          <div key={text} className={styles.item}>
            {text.toUpperCase() === text ? (
              <div className={styles['item-title']}>
                <p>{text}</p>
              </div>
            ) : (
              <div className={styles['item-content']}>{text}</div>
            )}
          </div>
        )
    )}
  </div>
);

const parseModalText = text => {
  if (!text) return { coberturas: [], exclusiones: [] };

  const textSplitted = text.split('EXCLUSIONES');
  const coberturas = textSplitted[0] ? textSplitted[0].split(/\n|\r/) : [];
  const exclusiones = textSplitted[1] ? textSplitted[1].split(/\n|\r/) : [];

  return { coberturas, exclusiones };
};

const ModalFrame = ({ text }) => {
  const { coberturas, exclusiones } = parseModalText(text);

  return (
    <div className={styles['modal-frame']}>
      {renderModalItems(coberturas)}
      {exclusiones.length > 0 && <div className={styles.title}>Exclusiones</div>}
      {renderModalItems(exclusiones)}
    </div>
  );
};

ModalFrame.propTypes = {
  text: PropTypes.string.isRequired
};

export default ModalFrame;
