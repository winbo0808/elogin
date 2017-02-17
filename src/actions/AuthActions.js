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
    }).then((response) => response.json()).then((responseJson) => {
        console.log(responseJson);
        if (responseJson.status === 0) {
          const userId = responseJson.user_id;
          const time = getCommonTime(responseJson.created_at);
          loginUserSuccess(dispatch, `用户id:${userId}\n创建时间:${time}\n`);
        } else {
          loginUserFail(dispatch);
        }
      }).done();
    };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT_USER });
  }
};

function getCommonTime(milliseconds) {
    var date = new Date(milliseconds),
            time = date.toLocaleString(),//这种方法获取的时间格式根据电脑的不同而有所不同
            formatTime = getFormatDate(date);//获取格式化后的日期
    return time;
}

function getFormatDate(timeStr, dateSeparator, timeSeparator) {
    dateSeparator = dateSeparator ? dateSeparator : "-";
    timeSeparator = timeSeparator ? timeSeparator : ":";
    var date = new Date(timeStr),
            year = date.getFullYear(),// 获取完整的年份(4位,1970)
            month = date.getMonth(),// 获取月份(0-11,0代表1月,用的时候记得加上1)
            day = date.getDate(),// 获取日(1-31)
            hour = date.getHours(),// 获取小时数(0-23)
            minute = date.getMinutes(),// 获取分钟数(0-59)
            seconds = date.getSeconds(),// 获取秒数(0-59)
            Y = year + dateSeparator,
            M = ((month + 1) > 10 ? (month + 1) : ('0' + (month + 1))) + dateSeparator,
            D = (day > 10 ? day : ('0' + day)) + ' ',
            h = (hour > 10 ? hour : ('0' + hour)) + timeSeparator,
            m = (minute > 10 ? minute : ('0' + minute)) + timeSeparator,
            s = (seconds > 10 ? seconds : ('0' + seconds)),
            formatDate = Y + M + D + h + m + s;
    return formatDate;
}

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};
