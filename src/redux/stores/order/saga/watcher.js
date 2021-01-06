import { takeEvery, fork, all } from 'redux-saga/effects';
import types from '../orderTypes';
import postOrder from './wolkers/postOrder';

function* watchPostOrder() {
  yield takeEvery(types.POST_ORDER_START, postOrder);
}

function* watchOrder() {
  yield all([fork(watchPostOrder)]);
}

export default watchOrder;
