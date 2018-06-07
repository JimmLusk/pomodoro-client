import React from 'react';
import ReactDOM from 'react-dom';
import { LoginPage }  from '../login-page';
import {shallow} from 'enzyme';

describe('Login Page', () => {
  it('renders without crashing', function(){
    shallow(<LoginPage />);
  });
});