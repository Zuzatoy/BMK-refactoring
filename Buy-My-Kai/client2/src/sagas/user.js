import { call, put, takeLatest } from 'redux-saga/effects';
import { setToken } from '../utils/token';
import request from 'axios';

const GEOCODING_PROVIDER_URL =
  'http://www.mapquestapi.com/geocoding/v1/address?key=4d6Splj1DnO9rnsmLbDkjAuyqmExW4KH';

import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  registerUser,
} from '../actions/register';

const apiCallRegisterUser = (userData) => {
  console.log(userData); // here sould be api request to backend
};

function* register({ payload }) {
  try {
    const response = yield call(apiCallRegisterUser, payload);

    yield put({
      type: REGISTER_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: REGISTER_ERROR,
      payload: error,
    });
  }
}

export default [takeLatest(REGISTER_REQUEST, register)];
