import React from 'react';
import ReactDOM from 'react-dom';
import { TimerControls }  from '../timer-controls';
import {shallow} from 'enzyme';

describe('Timer Controls', () => {
  it('renders without crashing', function(){
    shallow(<TimerControls />);
  });
});