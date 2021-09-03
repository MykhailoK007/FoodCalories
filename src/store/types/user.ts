import { UpdateUserInfoBody, UserInfoResponse } from '../../api/user';
import * as UserApi from '../actions/user.actions';

export interface GetUserInfoRequestAction {
  type: typeof UserApi.GET_USER_INFO_REQUEST;
}
export interface GetUserInfoSuccessAction {
  type: typeof UserApi.GET_USER_INFO_SUCCESS;
  payload: UserInfoResponse;
}
export interface GetUserInfoFailureAction {
  type: typeof UserApi.GET_USER_INFO_FAILURE;
  payload: string;
}

export interface UpdateUserInfoRequestAction {
  type: typeof UserApi.UPDATE_USER_INFO_REQUEST;
  payload: UpdateUserInfoBody;
}
export interface UpdateUserInfoSuccessAction {
  type: typeof UserApi.UPDATE_USER_INFO_SUCCESS;
  payload: UserInfoResponse;
}
export interface UpdateUserInfoFailureAction {
  type: typeof UserApi.UPDATE_USER_INFO_FAILURE;
  payload: string;
}
export interface UserState {
  id: string;
  role: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  picture: string;
  description: string;
  phoneNumber: string;
  createdAt: string;
  loaded: boolean;
  error: string;
}
export type UserType =
  | GetUserInfoRequestAction
  | GetUserInfoSuccessAction
  | GetUserInfoFailureAction
  | UpdateUserInfoRequestAction
  | UpdateUserInfoSuccessAction
  | UpdateUserInfoFailureAction;
