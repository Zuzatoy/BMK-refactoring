const USERS_REGISTER = 'USERS_REGISTER';
const USERS_LOGIN = 'USERS_LOGIN';
const USERS_LOGOUT = 'USERS_LOGOUT';
const USERS_SUCCESS = 'USERS_SUCCESS';
const USERS_ERROR = 'USERS_ERROR';

export const usersActions = {
  USERS_REGISTER,
  USERS_LOGIN,
  USERS_LOGOUT,
  USERS_SUCCESS,
  USERS_ERROR,
};

export const registerUser = (payload) => ({
  // pass this function to onClick event to registration button (dont forget to import it see example in Pizza)
  type: USERS_REGISTER,
  payload,
});

export const loginUser = (payload) => ({
  type: USERS_LOGIN,
  payload,
});

// TODO: Add reducer
export function usersReducer(state = [], { type, payload }) {
  switch (type) {
    case USERS_REGISTER:
    case USERS_LOGIN:
    case USERS_LOGOUT:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case USERS_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        error: '',
      };
    case USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
