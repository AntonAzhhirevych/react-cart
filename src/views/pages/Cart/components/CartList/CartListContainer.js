import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartList from './CartList';
import cartActions from '../../../../../redux/stores/cart/cartAction';
import { cart } from '../../../../../redux/selectors/selectors';

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

const mapDispatchToProps = dispatch => {
  return {
    getCartProduct: () => dispatch(cartActions.getCartListStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartListContainer);
