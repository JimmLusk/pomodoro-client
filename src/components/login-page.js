import React from 'react';
import LoginForm from './login-form';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './styles/login-page.css';

export function LoginPage(props){
  
  if (props.loggedIn) {
		return <Redirect to="/home" />;
  }
  
  return (
    <div className="login">
      <h2>Log Back Into KatchUp</h2>
      <div className='login-inputs-container'>
        <LoginForm />
      </div>
      <p>Don't have an account?</p>
      <Link to="/register">Register</Link>
    </div>
  );
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);