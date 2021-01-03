import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OrderForm from './OrderForm';
import { cart } from '../../../../../redux/selectors/selectors';
import postOrder from '../../../../../redux/stores/order/orderOperations';
import { updateCartProduct } from '../../../../../redux/stores/cart/cartOperations';
import UPDATE_CART_TYPE from '../../../../../constants/cart';
import * as validators from '../../../../../utilites/validators';

import Input from '../../../../components/common/FormsControls/Input';

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
