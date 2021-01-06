import { handleActions } from 'redux-actions';
import cartActions from './cartAction';

const defaultState = {};

const cartReducer = handleActions(
  {
    [cartActions.getCartListSuccess]: (state, { payload }) => payload,
    [cartActions.addProductToCartSuccess]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    [cartActions.updateProductCartSuccess]: (state, { payload }) => ({
      ...payload,
    }),
  },
  defaultState,
);

export default cartReducer;
