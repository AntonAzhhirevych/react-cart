import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import ThreeDots from 'react-loader-spinner';
import React from 'react';
import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.loaderContainer}>
    <div className={styles.loaderItem}>
      <ThreeDots type="ThreeDots" color="black" height={100} width={100} />
    </div>
  </div>
);

export default Loader;
