import UPDATE_CART_TYPE from '../constants/cart';

export const addProduct = (cart, product) =>
  cart[product.id] ? cart : { ...cart, [product.id]: product };

export const updateCart = (cart, id, action) => {
  let newCart = { ...cart };

  const isNeedToRemoveProductFromCart =
    action === UPDATE_CART_TYPE.DECREMENT && newCart[id].quantity === 1;
  const IsNeedClearCart = action === UPDATE_CART_TYPE.CLEAR;

  if (IsNeedClearCart) {
    newCart = {};
  } else if (isNeedToRemoveProductFromCart) {
    delete newCart[id];
  } else {
    newCart[id].quantity =
      action === UPDATE_CART_TYPE.INCREMENT
        ? newCart[id].quantity + 1
        : newCart[id].quantity - 1;
  }

  return newCart;
};
