import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthenticatedRouter } from './AuthenticatedRouter';
import { UnauthenticatedRouter } from './UnauthenticatedRouter';

export const RootRouter = () => {
  const isAuthenticated = false;
  return <Router>{isAuthenticated ? <AuthenticatedRouter /> : <UnauthenticatedRouter />}</Router>;
};