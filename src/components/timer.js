import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import TimerDisplay from './timer-display.js';
import TimerControls from './timer-controls.js';
import TimerOptions from './timer-options.js';
import Tomato from './tomato.js';
import LogoutButton from './logout-button';

export class Timer extends React.Component{
 
  
  render(){
    return (
      <div>
        <TimerDisplay/>
        <TimerControls/>
        <TimerOptions/>
        <Tomato/>
        <LogoutButton/>
      </div>
    )
  }
}

export default requiresLogin()(connect()(Timer));