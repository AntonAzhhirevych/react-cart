import { connect } from 'react-redux';
import React from 'react';
import { addProductToCart } from '../../redux/cart/cartOperations';
import ProductListItem from './ProductListItem';

const ProductListItemContainer = ({ addProductToCart, item }) => (
  <ProductListItem item={item} addProductToCart={addProductToCart} />
);

const mapDispatchToProps = {
  addProductToCart,
};

export default connect(null, mapDispatchToProps)(ProductListItemContainer);
