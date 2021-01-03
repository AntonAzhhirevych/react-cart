import { handleActions } from 'redux-actions';
import cartActions from './cartAction';

const defaultState = {};

const cartReducer = handleActions(
  {
    [cartActions.getCartListSuccess]: (state, { payload }) => payload,
  },
  defaultState,
);

export default cartReducer;
