import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from '../components/layout';
import { NotFound } from '../pages/NotFound';
import { ProfileRoute } from '../router/routes';
import { Profile } from '../pages/Profile';

export const AuthenticatedRouter = () => (
  <Layout>
    <Switch>
      <Route path='/' exact>
        User is authenticated!
      </Route>
      <Route path={ProfileRoute}>
        <Profile />
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  </Layout>
);
