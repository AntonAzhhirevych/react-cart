import { createSelector } from 'reselect';

export const product = state => state.product;
export const cart = state => Object.values(state.cart);
export const loading = state => state.loading;
export const error = state => state.error;

export const getTotalPriceCart = createSelector([cart], cartList => {
  const prices = cartList.map(({ quantity, price }) =>
    quantity > 1 ? price * quantity : price,
  );
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return prices.reduce(reducer, 0);
});

export const getQuantityInCart = createSelector([cart], cartList => {
  const prices = cartList.map(el => el.quantity);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  return prices.reduce(reducer, 0);
});
