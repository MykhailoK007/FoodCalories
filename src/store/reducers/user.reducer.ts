import { UserState, UserType } from '../types/user';
import * as AuthActions from '../actions/user.actions';

const initialState: UserState = {
  id: '',
  role: '',
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  picture: '',
  description: '',
  phoneNumber: '',
  createdAt: '',
  loaded: true,
  error: ''
};

export default function user(state = initialState, action: UserType): UserState {
  switch (action.type) {
    case AuthActions.GET_USER_INFO_REQUEST:
      return {
        ...state,
        loaded: false,
        error: ''
      };
    case AuthActions.GET_USER_INFO_SUCCESS:
      return {
        ...state,
        loaded: true,
        ...action.payload
      };
    case AuthActions.GET_USER_INFO_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case AuthActions.UPDATE_USER_INFO_REQUEST:
      return {
        ...state,
        loaded: false,
        error: ''
      };
    case AuthActions.UPDATE_USER_INFO_SUCCESS:
      return {
        ...state,
        loaded: true,
        ...action.payload
      };
    case AuthActions.UPDATE_USER_INFO_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
