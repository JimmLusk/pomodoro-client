import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './styles/landing-page.css';
//import rightArrowWhite from '../graphics/arrow-right-white.svg';

export function LandingPage(props){
  
  let welcomeMsg = 'Welcome to Katch Up';

  if (props.loggedIn) {
		if(props.currentUser.name !== '' && props.currentUser.name !== null){
      welcomeMsg = `Welcome back ${props.currentUser.name}`;
    } else if(props.currentUser.name !== null){
      welcomeMsg = `Welcome back ${props.currentUser.username}`;
    }
  }


  function displayedLinks(){
    if(props.loggedIn){
      return (
        <div className='timer-link-container'>
          <Link to='/home' className='timer-link'>Go to your timer</Link>
        </div>
      );
    } else {
      return (
        <div className='links-container'>
          <div className='timer-link-container'>
          <Link to="/login" className="login-link">Login </Link>
          </div>
          <div className='timer-link-container'>
          <Link to="/register" className="register-link"> Register</Link>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="landing-page">
      <h2>{welcomeMsg}</h2>
      {displayedLinks()}
    </div>
  );


}


const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(LandingPage);