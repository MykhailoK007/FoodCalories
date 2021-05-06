import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from '../components/layout';
import { NotFound } from '../pages/NotFound';
import { DishesRoute, Ingredients, ProfileRoute } from '../router/routes';
import { Profile } from '../pages/Profile';
import { Dishes } from '../pages/Dishes';
import Ingredient from '../pages/Ingredients/Ingredients';

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
      <Route path={Ingredients}>
        <Ingredient />
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  </Layout>
);
