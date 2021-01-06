// import axios from 'axios';
// import cartActions from './cartAction';
// import { addProduct, updateCart } from '../../../utilites/cart';
// import API from '../../../constants/API';

// export const getCartProduct = () => dispatch => {
//   dispatch(cartActions.getCartListStart());
//   axios
//     .get(API.getCart)
//     .then(cart => dispatch(cartActions.getCartListSuccess(cart.data || {})))
//     .catch(error => dispatch(cartActions.getCartListError(error)));
// };

// export const addProductToCart = product => (dispatch, getState) => {
//   const { cart } = getState();
//   const newCart = addProduct(cart, product);

//   dispatch(cartActions.addProductToCartStart());

//   axios
//     .put(API.putCart, newCart)
//     .then(() => dispatch(getCartProduct(false)))
//     .then(data => dispatch(cartActions.addProductToCartSuccess(data)))

//     .catch(error => dispatch(cartActions.addProductToCartError(error)));
// };

// export const updateCartProduct = ({ id, action }) => (
//   dispatch,
//   getState,
// ) => () => {
//   const { cart } = getState();
//   const newCart = updateCart(cart, id, action);
//   dispatch(cartActions.updateProductCartStart());

//   axios
//     .put(API.putCart, newCart)
//     .then(() => dispatch(cartActions.updateProductCartSuccess()))
//     .then(() => dispatch(getCartProduct()))
//     .catch(error => dispatch(cartActions.updateProductCartError(error)));
// };
