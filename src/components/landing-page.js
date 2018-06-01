import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

export function LandingPage(props){
  
  if (props.loggedIn) {
		return <Redirect to="/home" />;
  }
  
  return (
    <div className="home">
      <h2>Log Back Into Pomodoro Type Beat</h2>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );


}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);