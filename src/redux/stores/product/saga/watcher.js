import { takeEvery, all, call } from 'redux-saga/effects';
import types from '../productTypes';
import featchProduct from './wolkers/fetchProduct';

function* watchFetchProduct() {
  yield takeEvery(types.GET_PRODUCT_LIST_START, featchProduct);
}

function* watchProduct() {
  yield all([call(watchFetchProduct)]);
}

export default watchProduct;
