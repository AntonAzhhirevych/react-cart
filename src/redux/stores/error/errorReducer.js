import { handleActions } from 'redux-actions';
import productActions from '../product/productActions';
import cartActions from '../cart/cartAction';
import orderActions from '../order/orderActions';

const errorDefaultState = '';

const errorReducer = handleActions(
  {
    [productActions.getProductListError]: (state, { payload }) =>
      payload.message,
    [cartActions.addProductToCartError]: (state, { payload }) =>
      payload.message,
    [cartActions.updateProductCartError]: (state, { payload }) =>
      payload.message,
    [cartActions.getCartListError]: (state, { payload }) => payload.message,
    [orderActions.postOrderError]: (state, { payload }) => payload.message,
  },
  errorDefaultState,
);

export default errorReducer;
