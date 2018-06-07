import React from 'react';
import ReactDOM from 'react-dom';
import { App }  from '../App.js';
import {shallow} from 'enzyme';

describe('App', () => {
  it('renders without crashing', function(){
    shallow(<App />);
  });
});


