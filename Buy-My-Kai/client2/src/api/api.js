import request from 'axios';

import { GEOCODING_PROVIDER_URL, SERVER_DEV_URL } from './constants';
import { setToken, getToken } from '../utils/token';


async function registerUser(userData) {
  try {
    await request.post(`${SERVER_DEV_URL}/users/register`, userData);
  } catch (error) {
    return new Error('Cannot register user: ' + error.message);
  }
}

async function getUserCoordinates(address) {
  try {
    const response = await request.post(GEOCODING_PROVIDER_URL, {
      location: address,
    });
    return response.data.results[0].locations[0].latLng;
  } catch (error) {
    return new Error('Unable to perform geocoding: ' + error.message);
  }
}

async function loginUser({ email, password: hash }) {
  try {
    const response = await request.post(`${SERVER_DEV_URL}/users/login`, {
      email,
      hash,
    });
    const { token, user } = response.data;

    setToken(token);

    return user;
  } catch (error) {
    return new Error('Cannot login user: ' + error.message);
  }
}

async function gerProfile() {
  try {
    const response = await request.get(`${SERVER_DEV_URL}/users/profile`, {
      getHeaders() 
    });
    const { token, user } = response.data;

    setToken(token);

    return user;
  } catch (error) {
    return new Error('Cannot login user: ' + error.message);
  }
}


export const api = {
  getUserCoordinates,
  registerUser,
  loginUser,
  getProfile
};
