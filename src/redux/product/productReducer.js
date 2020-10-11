import { handleActions } from 'redux-actions';
import productActions from './productActions';

const defaultState = [];

const productListReducer = handleActions(
  {
    [productActions.getProductListSuccess]: (state, { payload }) => payload,
  },
  defaultState,
);

export default productListReducer;
