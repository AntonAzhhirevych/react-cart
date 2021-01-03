import { createAction } from 'redux-actions';
import types from './orderTypes';

const postOrderStart = createAction(types.POST_ORDER_START);
const postOrderSuccess = createAction(types.POST_ORDER_SUCCESS);
const postOrderError = createAction(types.POST_ORDER_ERROR);

export default {
  postOrderStart,
  postOrderSuccess,
  postOrderError,
};
