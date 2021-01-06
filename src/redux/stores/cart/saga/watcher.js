import { takeEvery, fork, all } from 'redux-saga/effects';
import types from '../cartTypes';
import fetchCart from './wolkers/fetchCart';
import addToCart from './wolkers/addToCart';
import updateCart from './wolkers/updateCart';

function* watchFetchCart() {
  yield takeEvery(types.GET_CART_LIST_START, fetchCart);
}
function* watchAddToCart() {
  yield takeEvery(types.ADD_PRODUCT_TO_CART_START, addToCart);
}
function* watchUpdateToCart() {
  yield takeEvery(types.UPDATE_PRODUCT_CART_START, updateCart);
}

function* watchCart() {
  yield all([
    fork(watchFetchCart),
    fork(watchAddToCart),
    fork(watchUpdateToCart),
  ]);
}

export default watchCart;
