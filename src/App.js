import React, { Component } from 'react';
import './App.css';
import Timer from './components/timer';
import Tomato from './components/tomato';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer/>
        <Tomato/>
      </div>
    );
  }
}

export default App;
