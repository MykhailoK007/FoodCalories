import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from '../components/layout';
import { DishesRoute, ProfileRoute } from '../router/routes';
import { Profile } from '../pages/Profile';
import { Dishes } from '../pages/Dishes';
import { NotFound } from '../pages/NotFound';

export const AuthenticatedRouter = () => (
  <Layout>
    <Switch>
      <Route path='/' exact>
        User is authenticated!
      </Route>
      <Route path={ProfileRoute} exact>
        <Profile />
      </Route>
      <Route path={DishesRoute} exact>
        <Dishes />
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  </Layout>
);
