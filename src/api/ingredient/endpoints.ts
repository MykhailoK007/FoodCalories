import { AxiosResponse } from 'axios';
import Axios from '../axios';
import { AddIngredient, GetIngredientsResponse } from './types';

export const getIngredients = (): Promise<AxiosResponse<GetIngredientsResponse>> =>
  Axios.instance.get('/ingredient').then(res => res.data);

export const addIngredient = (body: AddIngredient): Promise<AxiosResponse<AddIngredient>> =>
  Axios.instance.post('/ingredient/add', body).then(res => res.data);
