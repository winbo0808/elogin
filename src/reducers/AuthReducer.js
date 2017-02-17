import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER
} from '../actions/types';

const INITIAL_STATE = {
  loginStatus: false,
  msg: 'please login',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, msg: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, msg: action.payload, loading: false, loginStatus: true };
    case LOGIN_USER_FAIL:
      return { ...state, msg: 'Authentication Failed.', loading: false };
    case LOGOUT_USER:
      return { ...state, msg: 'please login', loginStatus: false };
    default:
      return state;
  }
};
