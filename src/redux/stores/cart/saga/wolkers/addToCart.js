import { put, apply, select } from 'redux-saga/effects';
import cartActions from '../../cartAction';
import http from '../../../../../REST/http';
import { addProduct } from '../../../../../utilites/cart';

export default function* addToCart({ payload }) {
  try {
    const { cart } = yield select();
    const newCart = yield apply(cart, addProduct, [cart, payload]);

    const { data: product } = yield apply(http, http.putCart, [newCart]);
    yield put(cartActions.addProductToCartSuccess(product));
  } catch (err) {
    yield put(cartActions.addProductToCartError(err));
  }
}
