import React from 'react';
import ReactDOM from 'react-dom';
import { RegistrationPage }  from '../registration-page';
import {shallow} from 'enzyme';

describe('Registration Page', () => {
  it('renders without crashing', function(){
    shallow(<RegistrationPage />);
  });
});
