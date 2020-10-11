import { handleActions } from 'redux-actions';
import changeLoading from './loadingAction';

const loadingDefaultState = false;

const loadingReducer = handleActions(
  {
    [changeLoading]: (state, { payload }) => payload,
  },
  loadingDefaultState,
);

export default loadingReducer;
