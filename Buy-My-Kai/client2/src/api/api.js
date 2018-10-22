import request from 'axios';

import { GEOCODING_PROVIDER_URL, SERVER_DEV_URL } from './constants';

async function registerUser(userData) {
  try {
    const response = await request.post(
      `${SERVER_DEV_URL}/users/register`,
      userData,
    );
    console.log(response);
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

// const getUserCoordinatesPromise = (address) =>
//   request
//     .post(GEOCODING_PROVIDER_URL, { location: address })
//     .then((response) => response.data.results[0].locations[0].latLng)
//     .catch((error) => console.log(error));

export const api = {
  getUserCoordinates,
  registerUser,
};
