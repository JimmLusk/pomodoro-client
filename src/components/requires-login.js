import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export default () => Component => {
  function RequiresLogin(props){
    const {authenticating, loggedIn, error, ...passThroughProps} = props;
    if(authenticating){
      return <div>Logging In... (attempting to reach your garden)</div>;    
    } else if (!loggedIn || error){
      setTimeout(function(){return <Redirect to="/" />;}, 50);
    }

    return <Component {...passThroughProps} />;
  }

  const displayName = Component.displayName || Component.name || 'Component';
	RequiresLogin.displayName = `RequiresLogin(${displayName})`;

  const mapStateToProps= (state, props) => ({
    authenticating: state.auth.loading,
    loggedIn: state.auth.currentUser !== null,
    error: state.auth.error,
  });

  return connect(mapStateToProps)(RequiresLogin);
};