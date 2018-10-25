import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { api } from '../api';
import { setToken } from '../utils/token';
import { loginUserActions } from '../ducks';

const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } = loginUserActions;

function* login({ payload }) {
  try {
    const { email, hash } = payload;
    // const loginData =  yield call(api.loginUser);

    yield call(api.loginUser, {
      ...payload,
    });

    yield put({
      type: LOGIN_SUCCESS,
    });

    yield put(push('/profile'));
  } catch (error) {
    yield put({
      type: LOGIN_ERROR,
      payload: error,
    });
  }
}

export default [takeLatest(LOGIN_REQUEST, login)];
