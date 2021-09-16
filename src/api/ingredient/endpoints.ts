import { AxiosResponse } from 'axios';
import Axios from '../axios';
import { AddIngredientRequest, GetIngredientsResponse } from './types';

export const getIngredients = (): Promise<AxiosResponse<GetIngredientsResponse>> =>
  Axios.instance.get('/ingredient').then(res => res.data);

export const addIngredient = (body: AddIngredientRequest): Promise<AxiosResponse> =>
  Axios.instance.post('/ingredient/add', body).then(res => res.data);

export const removeIngredient = (id: string): Promise<AxiosResponse> =>
  Axios.instance.delete(`/ingredient/delete/${id}`).then(res => res.data);

export const editIngredient = (id: string, body: AddIngredientRequest): Promise<AxiosResponse> =>
  Axios.instance.patch(`/ingredient/update/${id}`, body).then(res => res.data);
