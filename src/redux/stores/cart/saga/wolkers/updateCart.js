import { put, apply, select } from 'redux-saga/effects';
import { updateCart as updateCartFn } from '../../../../../utilites/cart';
import cartActions from '../../cartAction';
import http from '../../../../../REST/http';

export default function* updateCart({ payload: { action, id } }) {
  try {
    const { cart } = yield select();
    const newCart = yield apply(cart, updateCartFn, [cart, id, action]);
    const { data: updatedCart } = yield apply(http, http.putCart, [newCart]);

    yield put(cartActions.updateProductCartSuccess(updatedCart));
  } catch (err) {
    yield put(cartActions.updateProductCartError(err));
  }
}
