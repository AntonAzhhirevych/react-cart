import React from 'react';
import styles from './ProductListItem.module.css';

const ListItem = ({ item, addProductToCart }) => {
  const { name, image, description, price } = item;
  return (
    <li className={styles.item}>
      <img className={styles.productImg} src={image} alt={name} />
      <div className={styles.itemContent}>
        <p className={styles.textBolt}>{name}</p>
        <p className={styles.itemDescText}>{description}</p>
        <p className={styles.textBolt}>{price}$</p>

        <button
          className={styles.button}
          type="button"
          onClick={() => addProductToCart(item)}
        >
          Add to Cart
        </button>
      </div>
    </li>
  );
};
export default ListItem;
