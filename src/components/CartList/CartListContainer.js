import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartList from './CartList';
import { cart } from '../../redux/selectors';
import { getCartProduct } from '../../redux/cart/cartOperations';

class CartListContainer extends Component {
  componentDidMount() {
    const { getCartProduct } = this.props;
    getCartProduct();
  }

  render() {
    const { cartList } = this.props;

    return <CartList items={cartList} />;
  }
}

const mapStateToProps = state => ({
  cartList: cart(state),
});

const mapDispatchToProps = {
  getCartProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartListContainer);
