import {
   START_TIMER,
   RESET_TIMER,
   STOP_TIMER,
   SET_WORK_TIME,
   SET_BREAK_TIME,
   UPDATE_TIME_REMAINING,
   SET_CONTROLS_LOCKED,
  } from '../actions/timerActions';

const initialState = {
  currentTimerType: 'work',
  running: false,
  startTime: null,
  workTime: 25*1*1000,
  breakTime: 5*1*1000,
  timeRemaining: 0,
  controlsLocked: false,
};


export default function reducer(state = initialState, action){
  switch(action.type){
    case START_TIMER:
      return Object.assign({}, state, {
        running: true,
        startTime: Date.now(),
      });
    case RESET_TIMER:
      return Object.assign({}, state, {
        running: false,
        startTime: null,
        timeRemaining: null,
      });
    case STOP_TIMER:
      return Object.assign({}, state, {
        running: false,
        timeRemaining: null,
      });
    case SET_WORK_TIME:
      return Object.assign({}, state, {
        workTime: action.time*1*1000
      });
    case SET_BREAK_TIME:
      return Object.assign({}, state, {
        breakTime: action.time*1*1000
      });
    case UPDATE_TIME_REMAINING:
      return Object.assign({}, state, {
        timeRemaining: action.timeRemaining,
      });
    case SET_CONTROLS_LOCKED:
      return Object.assign({}, state, {
        controlsLocked: action.locked,
      });
    default:
      return state;
  }
}
