import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NotFound } from '../pages/NotFound';

export const AuthenticatedRouter = () => (
  <Switch>
    <Route path='/' exact>
      User is authenticated!
    </Route>
    <Route path='*'>
      <NotFound />
    </Route>
  </Switch>
);
