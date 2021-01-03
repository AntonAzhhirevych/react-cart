import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import productListReducer from './product/productReducer';
import errorReducer from './error/errorReducer';
import loadingReducer from './loading/loadingReducer';
import cartReducer from './cart/cartReducer';

const rootReducer = {
  product: productListReducer,
  cart: cartReducer,
  form: formReducer,
  loading: loadingReducer,
  error: errorReducer,
};

export default combineReducers(rootReducer);
