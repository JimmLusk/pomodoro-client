import React from 'react';
import ReactDOM from 'react-dom';
import { TimerDisplay }  from '../timer-display';
import {shallow} from 'enzyme';

describe('Timer Display', () => {
  it('renders without crashing', function(){
    shallow(<TimerDisplay />);
  });
});