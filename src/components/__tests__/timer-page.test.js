import React from 'react';
import ReactDOM from 'react-dom';
import { TimerPage }  from '../timer-page';
import {shallow} from 'enzyme';

describe('Timer Page', () => {
  it('renders without crashing', function(){
    shallow(<TimerPage />);
  });
});