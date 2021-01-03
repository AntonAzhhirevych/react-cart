import { createAction } from 'redux-actions';
import types from './loadingTypes';

const changeLoading = createAction(types.SET_LOADING);

export default changeLoading;
