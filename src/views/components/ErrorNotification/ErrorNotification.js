import React from 'react';
import styles from './ErrorNotification.module.css';

const ErrorNotification = ({ error }) => (
  <div className={styles.ErrorContainer}>
    <p className={styles.Text}>
      Oh, something went wrong: {error}.<br />
      Reload the page
    </p>
  </div>
);

export default ErrorNotification;
