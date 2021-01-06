import { applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import stateValidation from './state-validation';

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware, reduxThunk, stateValidation);

export { enhancer, sagaMiddleware };
