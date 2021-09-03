import { AxiosResponse } from 'axios';
import { UpdateUserInfoBody, UserInfoResponse } from '.';
import Axios from '../axios';

export const getUserInfo = (): Promise<AxiosResponse<UserInfoResponse>> =>
  Axios.instance.get('/user').then(res => res.data);

export const updateUserInfo = (
  body: UpdateUserInfoBody
): Promise<AxiosResponse<UserInfoResponse>> =>
  Axios.instance.patch('user/update', body).then(res => res.data);

// export const getUserPhoto = (): Promise<AxiosResponse<>> => ();
