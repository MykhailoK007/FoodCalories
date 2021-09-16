import {
  AddIngredientRequest,
  GetIngredientsResponse,
  UpdateIngredientRequest
} from '../../api/ingredient/types';
import {
  removeIngredientFailureAction,
  removeIngredientRequestAction,
  removeIngredientSuccessAction
} from '../types/ingredient';

export const GET_INGREDIENT_SUCCESS = 'GET_INGREDIENT_SUCCESS';
export const GET_INGREDIENT_REQUEST = 'GET_INGREDIENT_REQUEST';
export const GET_INGREDIENT_FAILURE = 'GET_INGREDIENT_FAILURE';

export const ADD_INGREDIENT_SUCCESS = 'ADD_INGREDIENT_SUCCESS';
export const ADD_INGREDIENT_REQUEST = 'ADD_INGREDIENT_REQUEST';
export const ADD_INGREDIENT_FAILURE = 'ADD_INGREDIENT_FAILURE';

export const REMOVE_INGREDIENT_SUCCESS = 'REMOVE_INGREDIENT_SUCCESS';
export const REMOVE_INGREDIENT_REQUEST = 'REMOVE_INGREDIENT_REQUEST';
export const REMOVE_INGREDIENT_FAILURE = 'REMOVE_INGREDIENT_FAILURE';

export const UPDATE_INGREDIENT_SUCCESS = 'UPDATE_INGREDIENT_SUCCESS';
export const UPDATE_INGREDIENT_REQUEST = 'UPDATE_INGREDIENT_REQUEST';
export const UPDATE_INGREDIENT_FAILURE = 'UPDATE_INGREDIENT_FAILURE';

export const getIngredients = {
  request: () => ({ type: GET_INGREDIENT_REQUEST }),
  success: (data: GetIngredientsResponse) => ({ type: GET_INGREDIENT_SUCCESS, payload: data }),
  failure: (data: string) => ({ type: GET_INGREDIENT_FAILURE, payload: data })
};
export const addIngredient = {
  request: (payload: UpdateIngredientRequest & { mode: 'edit' | 'new' }) => ({
    type: ADD_INGREDIENT_REQUEST,
    payload
  }),
  success: () => ({ type: ADD_INGREDIENT_SUCCESS }),
  failure: (data: string) => ({ type: ADD_INGREDIENT_FAILURE, payload: data })
};

export const removeIngredient = {
  request: (payload: string): removeIngredientRequestAction => ({
    type: REMOVE_INGREDIENT_REQUEST,
    payload
  }),
  success: (): removeIngredientSuccessAction => ({ type: REMOVE_INGREDIENT_SUCCESS }),
  failure: (data: string): removeIngredientFailureAction => ({
    type: REMOVE_INGREDIENT_FAILURE,
    payload: data
  })
};
