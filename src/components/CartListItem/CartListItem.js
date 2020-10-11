import React from 'react';
import styles from './CartListItem.module.css';
import QuantityButtons from '../shared/QuantityButtons/QuantityButtons';

const CartListItem = ({ item, updateCartProduct }) => {
  const { image, name, id, quantity, price, description } = item;
  return (
    <li className={styles.item}>
      <>
        <img className={styles.cartImg} src={image} alt={name} />
        <div className={styles.itemDesc}>
          <p className={(styles.itemDescText, styles.textBolt)}>{name}</p>
          <p className={styles.itemDescText}>{description}</p>
          <p className={styles.itemDescText}>Qty: {quantity}</p>
          <p className={(styles.itemDescText, styles.textBolt)}>{price}$</p>
        </div>
      </>
      <QuantityButtons updateCartProduct={updateCartProduct} id={id} />
    </li>
  );
};

export default CartListItem;
