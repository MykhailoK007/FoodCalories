// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Redirect, Route } from 'react-router-dom';
// import { SignInRoute } from '../../router/routes';
// import { AppState } from '../../state/store';

// const ProtectedRoute = ({ Component, ...props }:) => {
//   const { authorized } = useSelector(({ auth }: AppState) => auth);
//   const token = localStorage.getItem('token');
//   return (
//     <Route
//       {...props}
//       render={props => (authorized ? <Component {...props} /> : <Redirect to={SignInRoute} />)}
//     />
//   );
// };

export default {};
