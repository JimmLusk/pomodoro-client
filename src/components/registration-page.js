import React from 'react';
import RegistrationForm from './registration-form';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

export function RegistrationPage(props){
  
  if (props.loggedIn) {
		return <Redirect to="/home" />;
  }
  
  return (
    <div className="home">
      <h2>Create an Account for Pomodoro Type Beat</h2>
      <RegistrationForm />
      <Link to="/login">Login</Link>
    </div>
  );


}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);