import * as AuthActions from '../actions/auth.actions';
import { AuthState, AuthType } from '../types/auth';

const initialState: AuthState = {
  loaded: true,
  error: '',
  authorized: false,
  token: ''
};

export default function auth(state = initialState, action: AuthType): AuthState {
  switch (action.type) {
    case AuthActions.SIGN_UP_REQUEST:
      return {
        ...state,
        loaded: false,
        error: ''
      };
    case AuthActions.SIGN_UP_SUCCESS:
      return {
        ...state,
        loaded: true,
        authorized: true,
        error: '',
        token: action.payload
      };
    case AuthActions.SIGN_UP_FAILURE:
      return {
        ...state,
        loaded: false,
        error: action.payload
      };
    case AuthActions.SIGN_IN_REQUEST:
      return {
        ...state,
        loaded: false,
        error: ''
      };
    case AuthActions.SIGN_IN_SUCCESS:
      return {
        ...state,
        loaded: true,
        authorized: true,
        error: '',
        token: action.payload
      };
    case AuthActions.SIGN_IN_FAILURE:
      return {
        ...state,
        loaded: false,
        error: action.payload
      };
    case AuthActions.SET_AUTHORIZED:
      return {
        ...state,
        authorized: true
      };
    default:
      return state;
  }
}
