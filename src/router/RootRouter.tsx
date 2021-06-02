import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Router } from 'react-router-dom';
import { setAuthorized } from '../state/actions/auth.actions';
import { AppState } from '../state/store';
import { AuthenticatedRouter } from './AuthenticatedRouter';
import { UnauthenticatedRouter } from './UnauthenticatedRouter';
import history from '../history';
import { SignInRoute } from './routes';

export const RootRouter = () => {
  const { authorized } = useSelector(({ auth }: AppState) => auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    token ? dispatch(setAuthorized()) : <Redirect to={SignInRoute} />;
  }, []);
  return (
    <Router history={history}>
      {authorized ? <AuthenticatedRouter /> : <UnauthenticatedRouter />}
    </Router>
  );
};
