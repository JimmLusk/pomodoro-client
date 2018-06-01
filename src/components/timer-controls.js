import React from 'react';
import {connect} from 'react-redux';

import { startTimer, resetTimer, stopTimer } from '../actions/timerActions';

export class TimerControls extends React.Component{


  onStart(){
    console.log('started timer');
    this.props.dispatch(resetTimer());
    this.props.dispatch(startTimer());
  }

  onQuit(){
    console.log('earlt quit');
    this.props.dispatch(stopTimer());
    this.props.dispatch(resetTimer());
  }

  render(){
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
            this.onStart();
        }}>
        <button disabled={this.props.locked} type="submit">Start</button>
        </form>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.onQuit();
        }}>
        <button disabled={!this.props.locked} type="submit">Quit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    locked: state.timer.controlsLocked,
  }
}



export default connect(mapStateToProps)(TimerControls);