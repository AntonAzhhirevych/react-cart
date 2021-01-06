import { apply, put } from 'redux-saga/effects';
import cartActions from '../../cartAction';
import http from '../../../../../REST/http';

export default function* fetchCart() {
  try {
    const { data: cart } = yield apply(http, http.getCart);
    yield put(cartActions.getCartListSuccess(cart || {}));
  } catch (err) {
    yield put(cartActions.getCartListError(err));
  }
}
