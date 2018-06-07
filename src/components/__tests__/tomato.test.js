import React from 'react';
import ReactDOM from 'react-dom';
import { Tomato }  from '../tomato';
import {shallow} from 'enzyme';

describe('Tomato', () => {
  it('renders without crashing', function(){
    shallow(<Tomato />);
  });
});