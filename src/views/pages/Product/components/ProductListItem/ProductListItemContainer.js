import { connect } from 'react-redux';
import React from 'react';
import ProductListItem from './ProductListItem';
import cartActions from '../../../../../redux/stores/cart/cartAction';

const ProductListItemContainer = ({ addProductToCart, item }) => (
  <ProductListItem item={item} addProductToCart={addProductToCart} />
);

const mapDispatchToProps = dispatch => {
  return {
    addProductToCart: data => dispatch(cartActions.addProductToCartStart(data)),
  };
};

export default connect(null, mapDispatchToProps)(ProductListItemContainer);
