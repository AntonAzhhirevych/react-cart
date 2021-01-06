import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import { enhancer, sagaMiddleware } from '../middleware/enhancer';
import rootSaga from './rootSaga';

const store = createStore(rootReducer, composeWithDevTools(enhancer));

sagaMiddleware.run(rootSaga);

export default store;
