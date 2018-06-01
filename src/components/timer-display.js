import React from 'react';
import {connect} from 'react-redux';

import { stopTimer, updateTimeRemaining, setControlsLocked } from '../actions/timerActions';

export class TimerDisplay extends React.Component{
  
  componentDidUpdate(prevProps){
    if(!prevProps.running && this.props.running){
      this.startTimerInterval();
    }
    if(prevProps.running && !this.props.running){
      this.stopTimerInterval();
    }
  }

  startTimerInterval(){
    this.props.dispatch(updateTimeRemaining((this.props.startTime + this.props.workTime) - Date.now()));
    this.props.dispatch(setControlsLocked(true));
    this.timerInterval = setInterval(()=>{
      this.props.dispatch(updateTimeRemaining((this.props.startTime + this.props.workTime) - Date.now()));
      if(this.props.timeRemaining <= 1000){
        this.stopTimerInterval();
      }
    }  
    ,1000);
    return;
  }


  stopTimerInterval(){
    if (!this.timerInterval) {
			return;
		}
    clearInterval(this.timerInterval);
    this.props.dispatch(stopTimer());
    this.props.dispatch(setControlsLocked(false));
  }
  
  
  convertToDisplayTime(ms){
    const s = Math.floor(ms/1000)
    const min = Math.floor(s / 60);
    const sec = s%60;
    return sec<10 ? `${min}:0${sec}` : `${min}:${sec}`;
  }

  render(){
    return (
      <div>
        <h2>{this.convertToDisplayTime(this.props.timeRemaining)}</h2>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    timeRemaining: state.timer.timeRemaining,
    workTime: state.timer.workTime,
    breakTime: state.timer.breakTime,
    running: state.timer.running,
    startTime: state.timer.startTime,
    timerType: state.timer.currentTimer,
  }
}

export default connect(mapStateToProps)(TimerDisplay);