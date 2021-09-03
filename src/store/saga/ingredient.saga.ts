import { call, put, takeLatest, all } from 'redux-saga/effects';

import * as IngredientApi from '../../api/ingredient';
import { GetIngredientsResponse } from '../../api/ingredient';
import {
  addIngredient,
  ADD_INGREDIENT_REQUEST,
  getIngredients,
  GET_INGREDIENT_REQUEST
} from '../actions/ingredient.actions';
import { addIngredientRequestAction } from '../types/ingredient';

function* getIngredientWorker() {
  try {
    const { data }: { data: GetIngredientsResponse } = yield call(IngredientApi.getIngredients);
    // eslint-disable-next-line no-debugger
    yield put(getIngredients.success(data));
  } catch (e) {
    yield put(getIngredients.failure(e.message));
  }
}
function* addIngredientWorker(action: addIngredientRequestAction) {
  try {
    yield call(IngredientApi.addIngredient, action.payload);
    // eslint-disable-next-line no-debugger
    yield put(addIngredient.success());
  } catch (e) {
    yield put(addIngredient.failure(e.message));
  }
}
function* ingredientSaga() {
  yield all([
    takeLatest(GET_INGREDIENT_REQUEST, getIngredientWorker),
    takeLatest(ADD_INGREDIENT_REQUEST, addIngredientWorker)
  ]);
}

export default ingredientSaga;
