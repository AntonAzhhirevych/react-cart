import { apply, put } from 'redux-saga/effects';
import productActions from '../../productActions';
import loadingActions from '../../../loading/loadingAction';
import changeDataFormat from '../../../../../utilites/changeDataFormat';
import http from '../../../../../REST/http';

export default function* fetchProduct() {
  try {
    yield put(loadingActions.changeLoading(true));

    const { data: product } = yield apply(http, http.getProduct);
    const result = yield apply(product, changeDataFormat, [product]);

    yield put(productActions.getProductListSuccess(result));
  } catch (error) {
    yield put(productActions.getProductListError(error));
  } finally {
    yield put(loadingActions.changeLoading(false));
  }
}
