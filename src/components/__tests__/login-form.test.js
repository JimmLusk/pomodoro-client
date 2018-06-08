import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from '../login-form';
import { mount, shallow } from 'enzyme';
import { reduxForm, reducer as formReducer } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';

describe('Login Form', () => {
  // it('renders without crashing', function(){
  //   let store = createStore(combineReducers({
  //     form: formReducer,
  //   }));
  //   mount(
  //   <Provider store={store}> 
  //     <LoginForm handleSubmit={function(){return;}}/>
  //   </Provider>
  //   );
  // });

  it('renders without crashing', function(){
    let store = createStore(combineReducers({
      form: formReducer,
    }))
    const wrapper = shallow(<LoginForm store={store} handleSubmit={function(){return;} }/>).dive();
  });


});