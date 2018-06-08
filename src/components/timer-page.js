import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import requiresLogin from './requires-login';
import Timer from './timer.js';
import Basket from './basket.js';
import Garden from './garden.js';
import HeaderBar from './header-bar';

import './styles/timer-page.css';

export class TimerPage extends React.Component{
  
  render(){

    if(!this.props.loggedIn){
      return <Redirect to='/'/>;
    }

    return (
      <div className='all'>
        <HeaderBar />
        <main>
        <Timer />
        <Garden />
        <Basket />
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default requiresLogin()(connect(mapStateToProps)(TimerPage));