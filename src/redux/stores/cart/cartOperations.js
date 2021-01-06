import cartActions from './cartAction';
import { addProduct, updateCart } from '../../../utilites/cart';
import http from '../../../REST/http';

export const getCartProduct = () => dispatch => {
  dispatch(cartActions.getCartListStart());
  http
    .getCart()
    .then(cart => dispatch(cartActions.getCartListSuccess(cart.data || {})))
    .catch(error => dispatch(cartActions.getCartListError(error)));
};

export const addProductToCart = product => (dispatch, getState) => {
  const { cart } = getState();
  const newCart = addProduct(cart, product);

  dispatch(cartActions.addProductToCartStart());

  http
    .putCart(newCart)
    .then(() => dispatch(getCartProduct(false)))
    .then(data => dispatch(cartActions.addProductToCartSuccess(data)))

    .catch(error => dispatch(cartActions.addProductToCartError(error)));
};

export const updateCartProduct = ({ id, action }) => (
  dispatch,
  getState,
) => () => {
  const { cart } = getState();
  const newCart = updateCart(cart, id, action);
  dispatch(cartActions.updateProductCartStart());

  http
    .putCart(newCart)
    .then(() => dispatch(cartActions.updateProductCartSuccess()))
    .then(() => dispatch(getCartProduct()))
    .catch(error => dispatch(cartActions.updateProductCartError(error)));
};
