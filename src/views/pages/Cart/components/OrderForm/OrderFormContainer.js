import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OrderForm from './OrderForm';
import { cart } from '../../../../../redux/selectors/selectors';
import orderActios from '../../../../../redux/stores/order/orderActions';
import cartActions from '../../../../../redux/stores/cart/cartAction';
import * as validators from '../../../../../utilites/validators';

import Input from '../../../../components/common/FormsControls/Input';

class OrderFormContainer extends Component {
  submit = values => {
    const { cartList, postOrder } = this.props;
    const newOrder = { ...values, listOfGoods: { ...cartList } };
    postOrder(newOrder);
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

const mapDispatchToProps = dispatch => {
  return {
    postOrder: data => dispatch(orderActios.postOrderStart(data)),
    updateCartProduct: action =>
      dispatch(cartActions.updateProductCartStart(action)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(OrderFormContainer));
