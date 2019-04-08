import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Map } from 'immutable';
import rootReducer from './reducers';

const initialState = Map({});
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(rootReducer, initialState, enhancer);

export default store;
