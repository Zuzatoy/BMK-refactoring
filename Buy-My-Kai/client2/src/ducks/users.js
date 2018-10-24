const REGISTER_REQUEST = 'REGISTER_REQUEST';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_ERROR = 'REGISTER_ERROR';

export const usersActions = {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
};

export const registerUser = (userData) => ({
  // pass this function to onClick event to registration button (dont forget to import it see example in Pizza)
  type: REGISTER_REQUEST,
  payload: userData,
});

export function usersReducer(state = [], { type, payload }) {
  switch (type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      };
    case REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    default:
      return state;
  }
}
