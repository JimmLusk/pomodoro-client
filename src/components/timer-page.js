import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import Timer from './timer.js';
import Tomato from './tomato.js';
import HeaderBar from './header-bar';

import './styles/timer-page.css';

export class TimerPage extends React.Component{
 
  
  render(){
    return (
      <div className='all'>
        <HeaderBar />
        <main>
        <Timer />
        <Tomato />
        </main>
      </div>
    )
  }
}

export default requiresLogin()(connect()(TimerPage));