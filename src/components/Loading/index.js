import Spinner from 'react-spinner-material';
import React from 'react';
import styles from './index.css';

const Loading = () => {
  const accentColor = document.documentElement.style.getPropertyValue('--accent');
  return (
    <div className={styles.spinnerContainer}>
      <Spinner size={60} spinnerColor={accentColor || '#000'} spinnerWidth={2} visible />
    </div>
  );
};

export default Loading;
