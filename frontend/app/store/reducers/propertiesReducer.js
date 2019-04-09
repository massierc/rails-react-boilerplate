import { Map, List } from 'immutable';
import { propertiesConstants } from '../constants';

const initialState = Map({
  loading: false,
  error: false,
  properties: List(),
});

const {
  FETCH_PROPERTIES_STARTED,
  FETCH_PROPERTIES_SUCCESS,
  FETCH_PROPERTIES_FAILURE,

  FETCH_PROPERTY_STARTED,
  FETCH_PROPERTY_SUCCESS,
  FETCH_PROPERTY_FAILURE,
} = propertiesConstants;

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

      // TODO implement
      // case FETCH_PROPERTY_STARTED:
      //   return state.set('loading', true);
      // case FETCH_PROPERTY_SUCCESS:
      //   return state
      //     .set('properties', action.payload)
      //     .set('loading', false);
      // case FETCH_PROPERTY_FAILURE:
      //   return state
      //     .set('error', action.payload)
      //     .set('loading', false);

    default:
      return state;
  }
};

export default propertiesReducer;
