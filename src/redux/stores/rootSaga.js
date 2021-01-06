import { all, fork } from 'redux-saga/effects';
import watchProduct from './product/saga/watcher';
import watchCart from './cart/saga/watcher';
import watchOrder from './order/saga/watcher';

function* rootSaga() {
  yield all([fork(watchProduct), fork(watchCart), fork(watchOrder)]);
}

export default rootSaga;
