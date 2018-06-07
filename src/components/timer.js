import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import TimerDisplay from './timer-display.js';
import TimerControls from './timer-controls.js';
import TimerOptions from './timer-options.js';

import './styles/timer.css';

export class Timer extends React.Component{
 
  render(){
    return (
    <section className='timer card'>
      <TimerDisplay className='timer-display'/>
      <TimerControls className='timer-controls'/>
      <TimerOptions className='timer-options'/>
    </section>
    )
  }
}

export default requiresLogin()(connect()(Timer));