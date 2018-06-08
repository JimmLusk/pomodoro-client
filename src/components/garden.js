import React from 'react';
import {connect} from 'react-redux';
//import tomato from '../graphics/tomato.svg';
import './styles/basket.css';

export class Garden extends React.Component{
 
  
  render(){
    let msg = 'Press start to grow a tomato';
    if(this.props.running){
      msg = 'Growing your tomato';
    }
    
    return (
      <section className='garden card'>
        <div className='garden-label'>
          {msg}
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  tomatCount : state.auth.currentUser.tomats.length,
  tomats: state.auth.currentUser.tomats,
  running: state.timer.running, 
});

export default connect(mapStateToProps)(Garden);