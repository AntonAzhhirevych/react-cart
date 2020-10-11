import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OrderForm from './OrderForm';
import { cart } from '../../redux/selectors';
import postOrder from '../../redux/order/orderOperations';
import { updateCartProduct } from '../../redux/cart/cartOperations';
import UPDATE_CART_TYPE from '../../consts/cart';
import * as validators from '../../utils/validators';

import Input from '../common/FormsControls/Input';

class OrderFormContainer extends Component {
  submit = values => {
    const { cartList, postOrder, updateCartProduct, history } = this.props;
    const newOrder = { ...values, listOfGoods: { ...cartList } };

    postOrder(newOrder).then(
      updateCartProduct({ action: UPDATE_CART_TYPE.CLEAR }),
    );
    history.push('/');
  };

  render() {
    const { cartList } = this.props;
    return (
      <>
        <OrderForm
          cartList={cartList}
          Input={Input}
          onSubmit={this.submit}
          validators={validators}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  cartList: cart(state),
});

const mapDispatchToProps = {
  postOrder,
  updateCartProduct,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(OrderFormContainer));
