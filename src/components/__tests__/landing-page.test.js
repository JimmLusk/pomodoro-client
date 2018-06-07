import React from 'react';
import ReactDOM from 'react-dom';
import { LandingPage }  from '../landing-page';
import {shallow} from 'enzyme';

describe('Landing Page', () => {
  it('renders without crashing', function(){
    shallow(<LandingPage />);
  });
});