import { AxiosResponse } from 'axios';
import Axios from '../axios';
import { SignInBody, SignUpBody, AuthResponse } from './types';

export const signIn = (body: SignInBody): Promise<AxiosResponse<AuthResponse>> =>
  Axios.instance.post('/signIn', body).then(res => res.data);
export const signUp = (body: SignUpBody): Promise<AxiosResponse<AuthResponse>> =>
  Axios.instance.post('/signUp', body).then(res => res.data);
