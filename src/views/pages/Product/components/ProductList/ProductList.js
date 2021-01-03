import React, { Fragment } from 'react';
import styles from './ProductList.module.css';

import ProductListItem from '../ProductListItem/ProductListItemContainer';

const ProductList = ({ items }) => {
  return (
    <div className={styles.productContainer}>
      <h1 className={styles.title}>Our Products</h1>
      <ul className={styles.list}>
        {items.map(item => (
          <Fragment key={item.id}>
            <ProductListItem item={item} />
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
