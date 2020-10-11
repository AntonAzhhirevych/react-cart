import { createAction } from 'redux-actions';
import types from './cartTypes';

const addProductToCartStart = createAction(types.ADD_PRODUCT_TO_CART_START);
const addProductToCartSuccess = createAction(types.ADD_PRODUCT_TO_CART_SUCCESS);
const addProductToCartError = createAction(types.ADD_PRODUCT_TO_CART_ERROR);

const updateProductCartStart = createAction(types.UPDATE_PRODUCT_CART_START);
const updateProductCartSuccess = createAction(
  types.UPDATE_PRODUCT_CART_SUCCESS,
);
const updateProductCartError = createAction(types.UPDATE_PRODUCT_CART_ERROR);

const getCartListStart = createAction(types.GET_CART_LIST_START);
const getCartListSuccess = createAction(types.GET_CART_LIST_SUCCESS);
const getCartListError = createAction(types.GET_CART_LIST_ERROR);

export default {
  addProductToCartStart,
  addProductToCartSuccess,
  addProductToCartError,
  updateProductCartStart,
  updateProductCartSuccess,
  updateProductCartError,
  getCartListStart,
  getCartListSuccess,
  getCartListError,
};
