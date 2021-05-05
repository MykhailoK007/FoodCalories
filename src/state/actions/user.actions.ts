import { UpdateUserInfoBody, UserInfoResponse } from '../../api/user';

export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST';
export const GET_USER_INFO_FAILURE = 'GET_USER_INFO_FAILURE';
export const UPDATE_USER_INFO_SUCCESS = 'UPDATE_USER_INFO_SUCCESS';
export const UPDATE_USER_INFO_REQUEST = 'UPDATE_USER_INFO_REQUEST';
export const UPDATE_USER_INFO_FAILURE = 'UPDATE_USER_INFO_FAILURE';

export const getUserInfo = {
  request: () => ({
    type: GET_USER_INFO_REQUEST
  }),
  success: (data: UserInfoResponse) => ({
    type: GET_USER_INFO_SUCCESS,
    payload: data
  }),
  failure: (data: string) => ({
    type: GET_USER_INFO_FAILURE,
    payload: data
  })
};
export const updateUserInfo = {
  request: (data: UpdateUserInfoBody) => ({
    type: UPDATE_USER_INFO_REQUEST,
    payload: data
  }),
  success: (data: UserInfoResponse) => ({
    type: UPDATE_USER_INFO_SUCCESS,
    payload: data
  }),
  failure: (data: string) => ({
    type: UPDATE_USER_INFO_FAILURE,
    payload: data
  })
};
