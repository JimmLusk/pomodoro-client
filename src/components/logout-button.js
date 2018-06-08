import React from 'react';
import {connect} from 'react-redux';
import { logout } from '../actions/authActions';

import './styles/logout-button.css';

export function LogoutButton(props){
  
  

  return (
    <div className="logout">
      <form onSubmit={(e) => {
        console.log('log out');
        e.preventDefault();
        props.dispatch(logout());
        return;
      }}>
      <button  
        type='submit' className='logout-button'
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