import React from 'react';
import {connect} from 'react-redux';
import LogoutButton from './logout-button';
import './styles/header-bar.css'


export class HeaderBar extends React.Component {
  render(){
    return(
      <header className='header-bar'>
        <div>
          <h1>Katch Up</h1>
        </div>
        <nav>
          <LogoutButton className='logout-button'/>
        </nav>
      </header>
    )
  }
}

export default connect()(HeaderBar);