import React from 'react';
import styles from './TotalItemsCart.module.css';

const TotalItemsCart = ({ total }) => {
  return (
    <div className={styles.cartItems}>
      <p className={styles.total}>{total}</p>
    </div>
  );
};

export default TotalItemsCart;
