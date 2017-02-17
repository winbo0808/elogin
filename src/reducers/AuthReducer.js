import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  msg: 'please login',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, msg: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, msg: 'login success', user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, msg: 'Authentication Failed.', password: '', loading: false };
    case LOGOUT_USER:
      return { ...state, msg: 'please login' };
    default:
      return state;
  }
};
