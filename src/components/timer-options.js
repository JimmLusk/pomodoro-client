import React from 'react';
import {connect} from 'react-redux';
import { setWorkTime, setBreakTime } from '../actions/timerActions';

import './styles/timer-options.css'

export class TimerOptions extends React.Component{

  setToDefaultValue(element){
    console.log(element.value);
    if(!element.value){
      element.value = 25;
    }
  }
  
  handleWorkChange(e){
    this.props.dispatch(setWorkTime(e.target.value));
  }

  handleBreakChange(e){
    this.props.dispatch(setBreakTime(e.target.value));
  }


  render(){
    return (
      <div>
        <div className="slidecontainer work-time-container">
          <span className='slider-text'>Work: <span className="slider-value work-value">{this.props.workTime/60000} </span>Minutes</span>
          <input
            onChange={(e) => {this.handleWorkChange(e)}}
            type="range" min="10" max="60" className="slider work-slider"
            defaultValue="25" disabled={this.props.locked}/>
        </div>
        <div className="slidecontainer break-time-container">
          <span className='slider-text'>Break: <span className="slider-value break-value">{this.props.breakTime/60000} </span>Minutes</span>
          <input
            onChange={(e) => {this.handleBreakChange(e)}}
            type="range" min="0" max="20" className="slider break-slider"
            defaultValue="5" disabled={this.props.locked}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    workTime: state.timer.workTime,
    breakTime: state.timer.breakTime,
    locked: state.timer.controlsLocked,
  }
}

export default connect(mapStateToProps)(TimerOptions);