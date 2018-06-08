import React from 'react';
import RegistrationForm from './registration-form';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import './styles/login-page.css';

export function RegistrationPage(props){
  
  if (props.loggedIn) {
		return <Redirect to="/home" />;
  }
  
  return (
    <div>
      <h2>Create an Account</h2>
      <div className='login-inputs-container'>
        <RegistrationForm />
        </div>
      <p>Already have an account?</p>
      <Link to="/login">Login</Link>
    </div>
  );


}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);