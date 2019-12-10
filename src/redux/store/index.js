import {createStore, applyMiddleware} from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const store = createStore(
	reducer, 
	applyMiddleware(thunk)
);

export default store;
