import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Product from './Product/Product';
import Cart from './Cart/Cart';

export const Routs = () => {
  return (
    <Switch>
      <Route path="/" exact component={Product} />
      <Route path="/cart" component={Cart} />

      <Redirect to="/" />
    </Switch>
  );
};

export default Routs;
