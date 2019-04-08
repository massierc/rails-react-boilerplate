import { combineReducers } from 'redux-immutable';
import appReducer from './appReducer';
import propertiesReducer from './propertiesReducer';

export default combineReducers({
  appReducer,
  propertiesReducer,
});
