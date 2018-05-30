import React from 'react';
import {connect} from 'react-redux';

import { startTimer, resetTimer } from '../actions/timerActions';

export class TimerControls extends React.Component{


  onStart(){
    console.log('started timer');
    this.props.dispatch(resetTimer());
    this.props.dispatch(startTimer());
  }

  render(){
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.onStart();
        }}>
        <button type="submit">Start</button>
        </form>
      </div>
    )
  }
}



export default connect()(TimerControls);