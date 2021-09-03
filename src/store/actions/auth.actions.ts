import { SignInBody, SignUpBody } from '../../api/auth';
import { AuthType } from '../types/auth';

export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';

export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';

export const SET_AUTHORIZED = 'SET_AUTHORIZED';
export const LOGOUT = 'LOGOUT';

export const signUp = {
  request: (data: SignUpBody): AuthType => ({
    type: SIGN_UP_REQUEST,
    payload: data
  }),
  success: (data: string): AuthType => ({
    type: SIGN_UP_SUCCESS,
    payload: data
  }),
  failure: (data: string): AuthType => ({
    type: SIGN_UP_FAILURE,
    payload: data
  })
};

export const signIn = {
  request: (data: SignInBody): AuthType => ({
    type: SIGN_IN_REQUEST,
    payload: data
  }),
  success: (data: string): AuthType => ({
    type: SIGN_IN_SUCCESS,
    payload: data
  }),
  failure: (data: string): AuthType => ({
    type: SIGN_IN_FAILURE,
    payload: data
  })
};
export const setAuthorized = (): AuthType => ({
  type: SET_AUTHORIZED
});
export const logout = (): AuthType => ({ type: LOGOUT });
