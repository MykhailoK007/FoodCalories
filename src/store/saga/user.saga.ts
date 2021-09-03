import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getUserInfo,
  updateUserInfo,
  UPDATE_USER_INFO_REQUEST,
  GET_USER_INFO_REQUEST
} from '../actions/user.actions';
import history from '../../history';
import { UpdateUserInfoRequestAction } from '../types/user';

import '../../api/user';
import * as UserApi from '../../api/user';
import { ProfileRoute } from '../../router/routes';

function* getUserInfoWorker() {
  try {
    const data: UserApi.UserInfoResponse = yield call(UserApi.getUserInfo);
    yield put(getUserInfo.success(data));
  } catch (e) {
    yield put(getUserInfo.failure(e.message));
  }
}

function* updateUserInfoWorker(action: UpdateUserInfoRequestAction) {
  try {
    const data: UserApi.UserInfoResponse = yield call(UserApi.updateUserInfo, action.payload);
    yield put(updateUserInfo.success(data));
    history.push(ProfileRoute);
  } catch (e) {
    yield put(updateUserInfo.failure(e.message));
  }
}
function* userSaga() {
  yield takeLatest(GET_USER_INFO_REQUEST, getUserInfoWorker);
  yield takeLatest(UPDATE_USER_INFO_REQUEST, updateUserInfoWorker);
}
export default userSaga;
