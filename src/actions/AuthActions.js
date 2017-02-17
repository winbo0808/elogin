import { Actions } from 'react-native-router-flux';
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER
} from './types';

export const loginUser = () => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    fetch('http://192.168.10.181/v1/ucuser', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          open_id: '261A5DC789416864E8CCAF308CD8FD05',
          sign: '870dfce2b0cb3cf4f3d1f95f28f07fc4',
          type: 'qq',
        })
      }).then((response) => {
        console.log(response);
          if (response.status === 200) {
            loginUserSuccess(dispatch, response.url);
          } else {
            loginUserFail(dispatch);
          }
        })
        .then((data) => {
          console.log(data);
        }).done();
    };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT_USER });
  }
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};
