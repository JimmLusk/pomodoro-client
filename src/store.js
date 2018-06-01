import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import timerReducer from './reducers/timerReducer';
import authReducer from './reducers/authReducer';
import {reducer as formReducer} from 'redux-form';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	combineReducers({
		timer: timerReducer,
		auth: authReducer,
		form: formReducer,
	}),
	composeEnhancers(
		applyMiddleware(thunk),
	)
);

export default store;