import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NotFound } from '../pages/NotFound';
import { Login } from '../pages/Login';
import { SignInRoute } from './routes';

export const UnauthenticatedRouter = () => (
  <Switch>
    <Route path={SignInRoute}>
      <Login />
    </Route>
    <Route path='*'>
      <NotFound />
    </Route>
  </Switch>
);
