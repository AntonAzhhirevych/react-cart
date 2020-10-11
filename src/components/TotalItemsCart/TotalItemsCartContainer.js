import React from 'react';
import { connect } from 'react-redux';
import TotalItemsCart from './TotalItemsCart';
import { getQuantityInCart } from '../../redux/selectors';

const TotalItemsCartContainer = ({ totalItems }) => {
  if (!totalItems) {
    return null;
  }
  return <TotalItemsCart total={totalItems} />;
};

const mapStateToProps = state => ({
  totalItems: getQuantityInCart(state),
});

export default connect(mapStateToProps, null)(TotalItemsCartContainer);
