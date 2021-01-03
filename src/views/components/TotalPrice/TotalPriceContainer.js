import React from 'react';
import { connect } from 'react-redux';
import { getTotalPriceCart } from '../../../redux/selectors/selectors';
import TotalPrice from './TotalPrice';

const TotalPriceContainer = ({ totalPriceCart }) => {
  if (!totalPriceCart) {
    return null;
  }
  return <TotalPrice price={totalPriceCart} />;
};

const mapStateToProps = state => ({
  totalPriceCart: getTotalPriceCart(state),
});

export default connect(mapStateToProps, null)(TotalPriceContainer);
