import request from 'axios';

import { GEOCODING_PROVIDER_URL } from './constants';

export const registerUser = (userData) => {
  console.log(userData); // here should be api request to backend
};

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
