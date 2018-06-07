import React from 'react';
import {HeaderBar}  from '../header-bar';
import {shallow} from 'enzyme';

describe('HeaderBar', () => {
  it('renders without crashing', function(){
    shallow(<HeaderBar />);
  });
});