export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const loginUserActions = {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
};

export const loginUser = (userData) => ({
  type: LOGIN_REQUEST,
  payload: userData,
});

export function loginReducer(state = [], { type, payload }) {
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    default:
      return state;
  }
}
