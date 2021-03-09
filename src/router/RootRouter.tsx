import React from 'react';
import { Router } from 'react-router-dom';
import { history } from './history';
import { AuthenticatedRouter } from './AuthenticatedRouter';
import { UnauthenticatedRouter } from './UnauthenticatedRouter';

export const RootRouter = () => {
  const isAuthenticated = false;
  return (
    <Router history={history}>
      {isAuthenticated ? <AuthenticatedRouter /> : <UnauthenticatedRouter />}
    </Router>
  );
};
