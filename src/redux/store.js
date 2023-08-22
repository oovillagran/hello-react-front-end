import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import greetingReducer from '../reducer/greetingReducer';

const rootReducer = combineReducers({
  greeting: greetingReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
