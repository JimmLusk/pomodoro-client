import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { logout } from '../actions/authActions';

export function LogoutButton(props){
  
  

  return (
    <div className="logout">
      <form onSubmit={(e) => {
        e.preventDefault();
        props.dispatch(logout());
        return <Redirect to='/'/>
      }}>
      <button  
        type='submit' 
        disabled={!props.loggedIn}>
        Logout
      </button>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LogoutButton);