import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login } from '../pages/Auth/Login';
import { Register } from '../pages/Auth/Register';
// import { NotFound } from '../pages/NotFound';
import { SignInRoute, SignUpRoute } from './routes';

export const UnauthenticatedRouter = () => (
  <Switch>
    <Route path={SignInRoute} component={Login} />
    <Route path={SignUpRoute} component={Register} />
    <Route path='*'>
      <div>Unauth</div>
      {/* <NotFound /> */}
    </Route>
  </Switch>
);
