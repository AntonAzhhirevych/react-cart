import { createAction } from 'redux-actions';
import types from './productTypes';

const getProductListStart = createAction(types.GET_PRODUCT_LIST_START);
const getProductListSuccess = createAction(types.GET_PRODUCT_LIST_SUCCESS);
const getProductListError = createAction(types.GET_PRODUCT_LIST_ERROR);

export default {
  getProductListStart,
  getProductListSuccess,
  getProductListError,
};
