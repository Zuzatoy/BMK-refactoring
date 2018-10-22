import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { api } from '../api';
import { setToken } from '../utils/token';
import { usersActions } from '../ducks';

const { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR } = usersActions;

/*
{
  type: 'REGISTER_REQUEST',
  payload: {
    address: '1/39 Stottholm Road',
    suburb: 'Titirangi',
    city: 'Auckland',
    name: 'Anna',
  }
}
*/

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
      type: REGISTER_SUCCESS,
    });

    yield put(push('/login'));
  } catch (error) {
    yield put({
      type: REGISTER_ERROR,
      payload: error,
    });
  }
}

export default [takeLatest(REGISTER_REQUEST, register)];
