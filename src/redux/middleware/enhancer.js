import { applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import stateValidation from './state-validation';

const enhancer = applyMiddleware(reduxThunk, stateValidation);

export default enhancer;
