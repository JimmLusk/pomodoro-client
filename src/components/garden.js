import React from 'react';
import {connect} from 'react-redux';
import tomato from '../graphics/tomato.svg';
import './styles/basket.css';

export class Garden extends React.Component{
 
  
  render(){
    return (
      <section className='garden card'>
        <div className='Garden-label'>
          Growing a Tomato
        </div>
        <div className='garden-contents'>
          <img src={tomato} alt='tomato'/>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  tomatCount : state.auth.currentUser.tomats.length,
  tomats: state.auth.currentUser.tomats, 
});

export default connect(mapStateToProps)(Garden);