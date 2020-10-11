import React from 'react';
import styles from './TotalPrice.module.css';

const TotalPrice = ({ price }) => {
  return <p className={styles.totalPrice}>{price} $ </p>;
};

export default TotalPrice;
