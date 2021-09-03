import * as IngredientApi from '../actions/ingredient.actions';
import { AddIngredient } from '../../api/ingredient';

export enum IngredientsActionTypes {
  GET_INGREDIENT = 'GET_INGREDIENT',
  ADD_INGREDIENT = 'ADD_INGREDIENT'
}
export type ingredientType = {
  name: string;
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
  payload: AddIngredient;
};
export type addIngredientSuccessAction = { type: typeof IngredientApi.ADD_INGREDIENT_SUCCESS };
export type addIngredientFailureAction = {
  type: typeof IngredientApi.ADD_INGREDIENT_FAILURE;
  payload: string;
};

export type IngredientType =
  | getIngredientRequestAction
  | getIngredientSuccessAction
  | getIngredientFailureAction
  | addIngredientRequestAction
  | addIngredientSuccessAction
  | addIngredientFailureAction;
