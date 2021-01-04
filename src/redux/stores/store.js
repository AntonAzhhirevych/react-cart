import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import enhancer from '../middleware/enhancer';

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
