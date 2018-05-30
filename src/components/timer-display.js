import React from 'react';
import {connect} from 'react-redux';

import { stopTimer, updateTimeRemaining } from '../actions/timerActions';

export class TimerDisplay extends React.Component{
  
  componentDidUpdate(prevProps){
    if(!prevProps.running && this.props.running){
      this.startTimerInterval();
    }
  }

  startTimerInterval(){
    this.props.dispatch(updateTimeRemaining((this.props.startTime + this.props.workTime) - Date.now()));
    this.timerInterval = setInterval(()=>{
      this.props.dispatch(updateTimeRemaining((this.props.startTime + this.props.workTime) - Date.now()));
      if(this.props.timeRemaining <= 1000){
        clearInterval(this.timerInterval);
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
		clearInterval(this.refreshInterval);
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
    timeRemaining: state.timeRemaining,
    workTime: state.workTime,
    breakTime: state.breakTime,
    running: state.running,
    startTime: state.startTime,
    timerType: state.currentTimer,
  }
}

export default connect(mapStateToProps)(TimerDisplay);