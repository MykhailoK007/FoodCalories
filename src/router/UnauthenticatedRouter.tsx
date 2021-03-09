import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NotFound } from '../pages/NotFound';
import { Login } from '../pages/Login';

export const UnauthenticatedRouter = () => (
  <Switch>
    <Route path='/signin'>
      <Login />
    </Route>
    <Route path='*'>
      <NotFound />
    </Route>
  </Switch>
);
