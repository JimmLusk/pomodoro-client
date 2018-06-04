import React from 'react';
import {connect} from 'react-redux';
import tomato from '../graphics/tomato.svg'
import './tomato.css';

export class Tomato extends React.Component{
 
  
  render(){
    return (
      <div>
        <img src={tomato} alt='tomato'/><span>x{this.props.tomatCount}</span>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tomatCount : state.auth.currentUser.tomats.length,
  tomats: state.auth.currentUser.tomats, 
});

export default connect(mapStateToProps)(Tomato);