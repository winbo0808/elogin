import {
  MAIN_SWITCH_HOME,
  MAIN_SWITCH_MINE,
} from '../actions/types';

const INITIAL_STATE = {
  index: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MAIN_SWITCH_HOME:
      return { ...state, index: 0 };
    case MAIN_SWITCH_MINE:
      return { ...state, index: 1 };
    default:
      return state;
  }
};
