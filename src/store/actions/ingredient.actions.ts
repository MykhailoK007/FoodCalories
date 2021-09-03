import { GetIngredientsResponse } from '../../api/ingredient/types';

export const GET_INGREDIENT_SUCCESS = 'GET_INGREDIENT_SUCCESS';
export const GET_INGREDIENT_REQUEST = 'GET_INGREDIENT_REQUEST';
export const GET_INGREDIENT_FAILURE = 'GET_INGREDIENT_FAILURE';

export const ADD_INGREDIENT_SUCCESS = 'ADD_INGREDIENT_SUCCESS';
export const ADD_INGREDIENT_REQUEST = 'ADD_INGREDIENT_REQUEST';
export const ADD_INGREDIENT_FAILURE = 'ADD_INGREDIENT_FAILURE';

export const getIngredients = {
  request: () => ({ type: GET_INGREDIENT_REQUEST }),
  success: (data: GetIngredientsResponse) => ({ type: GET_INGREDIENT_SUCCESS, payload: data }),
  failure: (data: string) => ({ type: GET_INGREDIENT_FAILURE, payload: data })
};
export const addIngredient = {
  request: () => ({ type: ADD_INGREDIENT_REQUEST }),
  success: () => ({ type: ADD_INGREDIENT_SUCCESS }),
  failure: (data: string) => ({ type: ADD_INGREDIENT_FAILURE, payload: data })
};
