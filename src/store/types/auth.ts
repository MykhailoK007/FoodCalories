import { SignInBody, SignUpBody } from '../../api/auth/types';
import * as AuthApi from '../actions/auth.actions';

export interface SignUpRequestAction {
  type: typeof AuthApi.SIGN_UP_REQUEST;
  payload: SignUpBody;
}
export interface SignUpSuccessAction {
  type: typeof AuthApi.SIGN_UP_SUCCESS;
  payload: string;
}
export type SignUpFailureAction = {
  type: typeof AuthApi.SIGN_UP_FAILURE;
  payload: string;
};

export interface SignInRequestAction {
  type: typeof AuthApi.SIGN_IN_REQUEST;
  payload: SignInBody;
}
export interface SignInSuccessAction {
  type: typeof AuthApi.SIGN_IN_SUCCESS;
  payload: string;
}
export type SignInFailureAction = {
  type: typeof AuthApi.SIGN_IN_FAILURE;
  payload: string;
};
export type SetTokenAction = {
  type: typeof AuthApi.SET_AUTHORIZED;
};
export type LogoutAction = {
  type: typeof AuthApi.LOGOUT;
};
export interface AuthState {
  loaded: boolean;
  error: string;
  authorized: boolean;
  token: string;
}
export type AuthType =
  | SignUpRequestAction
  | SignUpSuccessAction
  | SignUpFailureAction
  | SignInRequestAction
  | SignInSuccessAction
  | SignInFailureAction
  | SetTokenAction
  | LogoutAction;
