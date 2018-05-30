import React from 'react';
import {connect} from 'react-redux';
import { setWorkTime, setBreakTime } from '../actions/timerActions';

export class TimerOptions extends React.Component{
 
  componentDidMount(){

  }


  setToDefaultValue(element){
    console.log(element.value);
    if(!element.value){
      element.value = 25;
    }
  }
  
  handleWorkChange(e){
    if(!this.props.locked){
      this.props.dispatch(setWorkTime(e.target.value));
    }
  }

  handleBreakChange(e){
    if(!this.props.locked){
      this.props.dispatch(setBreakTime(e.target.value));
    }
  }


  render(){
    return (
      <div>
        <div className="slidecontainer work-time-container">
          <h3>Work: <span className="slider-value js-slider-value js-work-value">{this.props.workTime/60000} </span><span>Minutes</span></h3>
          <input
            // ref={(element) => {this.setToDefaultValue(element)}}
            onChange={(e) => {this.handleWorkChange(e)}}
            type="range" min="10" max="60" className="slider js-slider js-work-slider"
            defaultValue="25"/>
        </div>
        <div className="slidecontainer break-time-container">
          <h3>Break: <span className="slider-value js-slider-value js-break-value">{this.props.breakTime/60000} </span><span>Minutes</span></h3>
          <input
            // ref={(element) => {this.setToDefaultValue(element)}}
            onChange={(e) => {this.handleBreakChange(e)}}
            type="range" min="0" max="20" className="slider js-slider js-break-slider"
            defaultValue="5"/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    workTime: state.workTime,
    breakTime: state.breakTime,
    locked: state.controlsLocked,
  }
}

export default connect(mapStateToProps)(TimerOptions);