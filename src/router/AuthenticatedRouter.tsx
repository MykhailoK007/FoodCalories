import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from '../components/layout';
import { NotFound } from '../pages/NotFound';

export const AuthenticatedRouter = () => (
  <Layout>
    <Switch>
      <Route path='/' exact>
        User is authenticated!
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  </Layout>
);
