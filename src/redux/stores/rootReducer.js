import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import productListReducer from './product/productReducer';

import errorReducer from './error/errorReducer';
import loadingReducer from './loading/loadingReducer';
import cartReducer from './cart/cartReducer';
import { history } from '../middleware/enhancer';

const rootReducer = combineReducers({
  product: productListReducer,
  cart: cartReducer,
  form: formReducer,
  loading: loadingReducer,
  error: errorReducer,
  router: connectRouter(history),
});

export default rootReducer;
