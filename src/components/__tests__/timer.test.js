import React from 'react';
import ReactDOM from 'react-dom';
import { Timer }  from '../timer.js';
import {shallow} from 'enzyme';

describe('Timer', () => {
  it('renders without crashing', function(){
    shallow(<Timer />);
  });
});