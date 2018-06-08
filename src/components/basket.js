import React from 'react';
import {connect} from 'react-redux';
import tomato from '../graphics/tomato.svg';
import basket from '../graphics/basket.svg';
import './styles/basket.css';

export class Basket extends React.Component{
 
  
  render(){
    return (
      <section className='basket card'>
        <div className='basket-label'>
          <img src={basket} alt='basket'/><span></span>
        </div>
        <div className='basket-contents'>
          <img src={tomato} alt='tomato'/><span>x{this.props.tomatCount}</span>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  tomatCount : state.auth.currentUser.tomats.length,
  tomats: state.auth.currentUser.tomats, 
  
});

export default connect(mapStateToProps)(Basket);