import React from 'react';
import { useSelector } from 'react-redux';
import { Router } from 'react-router-dom';

import { AppState } from '../state/store';
import { AuthenticatedRouter } from './AuthenticatedRouter';
import { UnauthenticatedRouter } from './UnauthenticatedRouter';
import history from '../history';

export const RootRouter = () => {
  const { authorized } = useSelector(({ auth }: AppState) => auth);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if(token){
  //     dispatch(setAuthorized());
  //   }
  // },[])
  // console.log(authorized);
  return (
    <Router history={history}>
      {authorized ? <AuthenticatedRouter /> : <UnauthenticatedRouter />}
    </Router>
  );
};
