import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Product from './Product/Product';
import Cart from './Cart/Cart';
import book from '../../constants/book';

export const Routs = () => {
  return (
    <Switch>
      <Route path={book.products} exact component={Product} />
      <Route path={book.cart} component={Cart} />

      <Redirect to={book.products} />
    </Switch>
  );
};

export default Routs;
