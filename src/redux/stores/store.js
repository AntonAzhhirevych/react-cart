import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import rootReducers from './rootReducers';

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(reduxThunk)),
);

export default store;
