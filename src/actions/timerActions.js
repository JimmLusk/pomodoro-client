

export const START_TIMER = 'START_TIMER';
export const startTimer = () => {
  return{
    type: START_TIMER,
  }
}
export const STOP_TIMER = 'STOP_TIMER';
export const stopTimer = () => {
  return{
    type: STOP_TIMER,
  }
}
export const RESET_TIMER = 'RESET_TIMER';
export const resetTimer = () => {
  return{
    type: RESET_TIMER,
  }
}
export const SET_WORK_TIME = 'SET_WORK_TIME';
export const setWorkTime = (time) => {
  return{
    type: SET_WORK_TIME,
    time
  }
}
export const SET_BREAK_TIME = 'SET_BREAK_TIME';
export const setBreakTime = (time) => {
  return{
    type: SET_BREAK_TIME,
    time
  }
}
export const UPDATE_TIME_REMAINING = 'UPDATE_TIME_REMAINING';
export const updateTimeRemaining = (timeRemaining) => {
  return {
    type: UPDATE_TIME_REMAINING,
    timeRemaining
  }
}