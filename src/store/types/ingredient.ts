import * as IngredientApi from '../actions/ingredient.actions';
import { AddIngredientRequest, UpdateIngredientRequest } from '../../api/ingredient';

export enum IngredientsActionTypes {
  GET_INGREDIENT = 'GET_INGREDIENT',
  ADD_INGREDIENT = 'ADD_INGREDIENT'
}
export type ingredientType = {
  name: string;
  caloriesPer1g: number;
  description: string;
  id: string;
};

export interface IIngredientState {
  loaded: boolean;
  error: string;
  ingredients: ingredientType[];
}
export type IGetIngredient = string[];

export type getIngredientRequestAction = { type: typeof IngredientApi.GET_INGREDIENT_REQUEST };
export type getIngredientSuccessAction = {
  type: typeof IngredientApi.GET_INGREDIENT_SUCCESS;
  payload: ingredientType[];
};
export type getIngredientFailureAction = {
  type: typeof IngredientApi.GET_INGREDIENT_FAILURE;
  payload: string;
};

export type addIngredientRequestAction = {
  type: typeof IngredientApi.ADD_INGREDIENT_REQUEST;
  payload: AddIngredientRequest & { mode: 'edit' | 'new' };
};
export type addIngredientSuccessAction = { type: typeof IngredientApi.ADD_INGREDIENT_SUCCESS };
export type addIngredientFailureAction = {
  type: typeof IngredientApi.ADD_INGREDIENT_FAILURE;
  payload: string;
};

export type removeIngredientRequestAction = {
  type: typeof IngredientApi.REMOVE_INGREDIENT_REQUEST;
  payload: string;
};
export type removeIngredientSuccessAction = {
  type: typeof IngredientApi.REMOVE_INGREDIENT_SUCCESS;
};
export type removeIngredientFailureAction = {
  type: typeof IngredientApi.REMOVE_INGREDIENT_FAILURE;
  payload: string;
};
export type updateIngredientRequestAction = {
  type: typeof IngredientApi.ADD_INGREDIENT_REQUEST;
  payload: UpdateIngredientRequest & { mode: 'edit' | 'new' };
};

export type IngredientType =
  | getIngredientRequestAction
  | getIngredientSuccessAction
  | getIngredientFailureAction
  | addIngredientRequestAction
  | addIngredientSuccessAction
  | addIngredientFailureAction
  | removeIngredientRequestAction
  | removeIngredientSuccessAction
  | removeIngredientFailureAction;
