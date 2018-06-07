import React from 'react';
import ReactDOM from 'react-dom';
import { TimerOptions }  from '../timer-options';
import {shallow} from 'enzyme';

describe('Timer Options', () => {
  it('renders without crashing', function(){
    shallow(<TimerOptions />);
  });
});