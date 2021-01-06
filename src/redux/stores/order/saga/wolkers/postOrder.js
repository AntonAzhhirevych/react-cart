import { put, apply } from 'redux-saga/effects';
import { reset } from 'redux-form';
// the method that does the replace
import { replace } from 'connected-react-router';
import http from '../../../../../REST/http';
import orderActions from '../../orderActions';
import cartActions from '../../../cart/cartAction';
import UPDATE_CART_TYPE from '../../../../../constants/cart';
import book from '../../../../../constants/book';

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
    // replace
    yield put(replace(book.products));
  }
}
