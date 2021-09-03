import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
  signUp,
  signIn,
  setAuthorized,
  SIGN_IN_REQUEST,
  SIGN_UP_REQUEST,
  LOGOUT
} from '../actions/auth.actions';
import * as AuthApi from '../../api/auth';
import { SignInRequestAction, SignUpRequestAction } from '../types/auth';
import history from '../../history';
import { ProfileRoute, SignInRoute } from '../../router/routes';

function* signInWorker(action: SignInRequestAction) {
  try {
    const { access_token } = yield call(AuthApi.signIn, action.payload);
    localStorage.setItem('token', access_token);
    yield put(setAuthorized());
    yield put(signIn.success(access_token));
    history.push(ProfileRoute);
  } catch (e) {
    yield put(signIn.failure(e.message));
  }
}

function* signUpWorker(action: SignUpRequestAction) {
  try {
    const { access_token } = yield call(AuthApi.signUp, action.payload);

    localStorage.setItem('token', access_token);
    yield put(setAuthorized());
    yield put(signUp.success(access_token));
    history.push(ProfileRoute);
  } catch (e) {
    yield put(signUp.failure(e.data));
  }
}

function* logoutWorker() {
  yield localStorage.removeItem('token');
  history.push(SignInRoute);
}

function* authorizationSaga() {
  yield all([
    takeLatest(SIGN_UP_REQUEST, signUpWorker),
    takeLatest(SIGN_IN_REQUEST, signInWorker),
    takeLatest(LOGOUT, logoutWorker)
  ]);
}
export default authorizationSaga;
