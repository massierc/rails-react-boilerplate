import { Map, List } from 'immutable';
import constants from '../constants';

const initialState = Map({
  properties: List(),
});

const {
  FETCH_PROPERTIES_STARTED,
  FETCH_PROPERTIES_SUCCESS,
  FETCH_PROPERTIES_FAILURE,
} = constants.propertiesConstants;

const propertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROPERTIES_STARTED:
      return state.set('loading', true);
    case FETCH_PROPERTIES_SUCCESS:
      return state
        .set('properties', action.payload)
        .set('loading', false);
    case FETCH_PROPERTIES_FAILURE:
      return state
        .set('error', action.payload)
        .set('loading', false);
    default:
      return state;
  }
};

export default propertiesReducer;
