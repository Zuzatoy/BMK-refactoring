import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { api } from '../api';
import { setToken } from '../utils/token';
import { usersActions } from '../ducks';

const {
  USERS_LOGIN,
  USERS_LOGOUT,
  USERS_REGISTER,
  USERS_ERROR,
  USERS_SUCCESS,
  USERS_PROFILE,
} = usersActions;

function* register({ payload }) {
  try {
    const { address, suburb, city } = payload;
    const fullAddress = `${address} ${suburb} ${city} New Zealand`;
    const coordinates = yield call(api.getUserCoordinates, fullAddress);

    yield call(api.registerUser, {
      ...payload,
      ...coordinates,
    });

    yield put({
      type: USERS_SUCCESS,
    });

    yield put(push('/login'));
  } catch (error) {
    yield put({
      type: USERS_ERROR,
      payload: error,
    });
  }
}

function* login({ payload }) {
  try {
    const response = yield call(api.loginUser, payload);

    yield put({
      type: USERS_SUCCESS,
      payload: response,
    });

    yield put(push('/profile'));
  } catch (error) {
    yield put({
      type: USERS_ERROR,
      payload: error,
    });
  }
}

function* profile({ payload }) {
  try {
    const response = yield call(api.getProfile, payload);
    yield put({
      type: USERS_PROFILE,
      payload: response,
    });
    yield put(push('/profile'));
  } catch (error) {
    yield put({
      type: USERS_ERROR,
      payload: error,
    });
  }
}

export default [
  takeLatest(USERS_REGISTER, register),
  takeLatest(USERS_LOGIN, login),
  takeLatest(USERS_PROFILE, profile),
];
