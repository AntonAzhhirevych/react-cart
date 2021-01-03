import React, { Fragment } from 'react';
import styles from './CartList.module.css';

import CartListItem from '../CartListItem/CartListItemContainer';

const CartList = ({ items }) => (
  <ul className={styles.list}>
    {items.map(item => (
      <Fragment key={item.id}>
        <CartListItem item={item} />
      </Fragment>
    ))}
  </ul>
);

export default CartList;
