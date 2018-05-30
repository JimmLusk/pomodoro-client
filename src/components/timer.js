import React from 'react';
import {connect} from 'react-redux';
import TimerDisplay from './timer-display.js';
import TimerControls from './timer-controls.js';
import TimerOptions from './timer-options.js';

export class Timer extends React.Component{
 
  
  render(){
    return (
      <div>
        <TimerDisplay/>
        <TimerControls/>
        <TimerOptions/>
      </div>
    )
  }
}

export default connect()(Timer);