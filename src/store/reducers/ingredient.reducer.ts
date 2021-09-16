import * as IngredientActions from '../actions/ingredient.actions';
import { IIngredientState, IngredientType } from '../types/ingredient';

const initialState: IIngredientState = {
  loaded: true,
  error: '',
  ingredients: []
};

export default function auth(state = initialState, action: IngredientType): IIngredientState {
  switch (action.type) {
    case IngredientActions.GET_INGREDIENT_REQUEST:
    case IngredientActions.ADD_INGREDIENT_REQUEST:
    case IngredientActions.REMOVE_INGREDIENT_REQUEST:
      return {
        ...state,
        loaded: false,
        error: ''
      };
    case IngredientActions.GET_INGREDIENT_SUCCESS:
      return {
        ...state,
        ingredients: action.payload,
        loaded: true
      };
    case IngredientActions.REMOVE_INGREDIENT_SUCCESS:
    case IngredientActions.ADD_INGREDIENT_SUCCESS:
      return {
        ...state,
        loaded: true
      };
    case IngredientActions.REMOVE_INGREDIENT_FAILURE:
    case IngredientActions.ADD_INGREDIENT_FAILURE:
    case IngredientActions.GET_INGREDIENT_FAILURE:
      return {
        ...state,
        loaded: true,
        error: action.payload
      };
    default:
      return state;
  }
}
