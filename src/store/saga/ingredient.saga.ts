import { call, put, takeLatest, all } from 'redux-saga/effects';

import * as IngredientApi from '../../api/ingredient';
import { GetIngredientsResponse } from '../../api/ingredient';
import {
  addIngredient,
  ADD_INGREDIENT_REQUEST,
  getIngredients,
  GET_INGREDIENT_REQUEST,
  removeIngredient,
  REMOVE_INGREDIENT_REQUEST
} from '../actions/ingredient.actions';
import {
  addIngredientRequestAction,
  removeIngredientRequestAction,
  updateIngredientRequestAction
} from '../types/ingredient';

function* getIngredientWorker() {
  try {
    const { data }: { data: GetIngredientsResponse } = yield call(IngredientApi.getIngredients);
    yield put(getIngredients.success(data));
  } catch (e) {
    yield put(getIngredients.failure(e.message));
  }
}
function* addIngredientWorker({ payload: { mode, id, ...body } }: updateIngredientRequestAction) {
  try {
    yield mode === 'new'
      ? call(IngredientApi.addIngredient, body)
      : call(IngredientApi.editIngredient, id!, body);
    yield put(addIngredient.success());
    yield call(getIngredientWorker);
  } catch (e) {
    yield put(addIngredient.failure(e.message));
  }
}

function* removeIngredientWorker(action: removeIngredientRequestAction) {
  try {
    yield call(IngredientApi.removeIngredient, action.payload);
    yield put(removeIngredient.success());
    yield call(getIngredientWorker);
  } catch (e) {
    yield put(removeIngredient.failure(e));
  }
}
function* ingredientSaga() {
  yield all([
    takeLatest(GET_INGREDIENT_REQUEST, getIngredientWorker),
    takeLatest(ADD_INGREDIENT_REQUEST, addIngredientWorker),
    takeLatest(REMOVE_INGREDIENT_REQUEST, removeIngredientWorker)
  ]);
}

export default ingredientSaga;
