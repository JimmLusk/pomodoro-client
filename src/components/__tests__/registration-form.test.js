import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationForm  from '../registration-form';
import {shallow} from 'enzyme';
import { reduxForm, reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';

describe('Registration Form', () => {
  it('renders without crashing', function(){
    it('renders without crashing', function(){
      let store = createStore(combineReducers({
        form: formReducer,
      }))
      const wrapper = shallow(<RegistrationForm store={store} handleSubmit={function(){return;} }/>).dive();
    });
  });
});