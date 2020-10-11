import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import productListReducer from './product/productReducer';
import errorReducer from './error/errorReducer';
import loadingReducer from './loading/loadingReducer';
import cartReducer from './cart/cartReducer';

const rootReducer = combineReducers({
  product: productListReducer,
  cart: cartReducer,
  form: formReducer,
  loading: loadingReducer,
  error: errorReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk)),
);

export default store;
