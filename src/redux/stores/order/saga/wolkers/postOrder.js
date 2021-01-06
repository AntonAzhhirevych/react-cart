import { put, apply } from 'redux-saga/effects';
import { reset } from 'redux-form';
import http from '../../../../../REST/http';
import orderActions from '../../orderActions';
import cartActions from '../../../cart/cartAction';
import UPDATE_CART_TYPE from '../../../../../constants/cart';

export default function* postOrder({ payload: data }) {
  try {
    const { data: order } = yield apply(http, http.postOrder, [data]);
    yield put(orderActions.postOrderSuccess(order));
  } catch (err) {
    yield put(orderActions.postOrderError(err));
  } finally {
    yield put(
      cartActions.updateProductCartStart({ action: UPDATE_CART_TYPE.CLEAR }),
    );
    yield put(reset('order'));
  }
}
