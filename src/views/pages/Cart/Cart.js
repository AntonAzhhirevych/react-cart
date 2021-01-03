import React from 'react';
import CartList from './components/CartList/CartListContainer';
import OrderForm from './components/OrderForm/OrderFormContainer';
import ReturnButton from '../../components/shared/ReturnButton/ReturnButtonContainer';
import styles from './Cart.module.css';

const Cart = () => {
  return (
    <div className={styles.cartContainer}>
      <ReturnButton />
      <div className={styles.cartContent}>
        <CartList />
        <OrderForm />
      </div>
    </div>
  );
};

export default Cart;
