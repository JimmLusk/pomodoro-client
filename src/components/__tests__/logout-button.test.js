import React from 'react';
import ReactDOM from 'react-dom';
import { LogoutButton }  from '../logout-button';
import {shallow} from 'enzyme';

describe('Logout Button', () => {
  it('renders without crashing', function(){
    shallow(<LogoutButton />);
  });
});