import React from 'react';
import styles from './ReturnButton.module.css';

const ReturnButton = ({ handleReturnButton }) => (
  <button type="button" onClick={handleReturnButton} className={styles.button}>
    Return to shopping
  </button>
);

export default ReturnButton;
