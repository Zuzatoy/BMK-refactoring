import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import { api } from '../api';
import { setToken } from '../utils/token';
import { loginUserActions } from '../ducks';

const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } = loginUserActions;


function* login ({ payload }) {
    try {
        const { name, password } = payload;
    }

}