import {
  MAIN_SWITCH_HOME,
  MAIN_SWITCH_MINE
} from './types';

export const mainSwitchHome = () => {
  return (dispatch) => {
    dispatch({ type: MAIN_SWITCH_HOME });
  }
};

export const mainSwitchMine = () => {
  return (dispatch) => {
    dispatch({ type: MAIN_SWITCH_MINE });
  }
};
