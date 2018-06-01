import React from 'react';
import {connect} from 'react-redux';
import tomato from '../graphics/tomato.svg'
import './tomato.css';

export class Tomato extends React.Component{
 
  
  render(){
    return (
      <div>
        <img src={tomato} alt='tomato'/><span>x5</span>
      </div>
    )
  }
}

export default connect()(Tomato);