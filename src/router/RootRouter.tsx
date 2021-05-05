import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Router } from 'react-router-dom';
import { setAuthorized } from '../state/actions/auth.actions';
import { AppState } from '../state/store';
import { AuthenticatedRouter } from './AuthenticatedRouter';
import { UnauthenticatedRouter } from './UnauthenticatedRouter';
import history from '../history';

export const RootRouter = () => {
  const { authorized } = useSelector(({ auth }: AppState) => auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(setAuthorized());
    }
  }, []);
  return (
    <Router history={history}>
      {authorized ? <AuthenticatedRouter /> : <UnauthenticatedRouter />}
    </Router>
  );
};
