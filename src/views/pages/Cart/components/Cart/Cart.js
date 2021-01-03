import React from 'react';
import cart from '../../../../../assets/images/cart.png';
import styles from './Cart.module.css';

const Cart = () => (
  <div className={styles.cartBtn}>
    <img src={cart} width="50" height="50" alt="cart" />
  </div>
);

export default Cart;
