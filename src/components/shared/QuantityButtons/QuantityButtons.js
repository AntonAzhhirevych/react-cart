import React from 'react';
import UPDATE_CART_TYPE from '../../../consts/cart';
import styles from './QuantityButtons.module.css';

const QuantityButtons = ({ updateCartProduct, id }) => (
  <div className={styles.buttons}>
    <button
      className={styles.button}
      onClick={updateCartProduct({
        id,
        action: UPDATE_CART_TYPE.DECREMENT,
      })}
      type="button"
    >
      -
    </button>

    <button
      className={styles.button}
      onClick={updateCartProduct({
        id,
        action: UPDATE_CART_TYPE.INCREMENT,
      })}
      type="button"
    >
      +
    </button>
  </div>
);

export default QuantityButtons;
