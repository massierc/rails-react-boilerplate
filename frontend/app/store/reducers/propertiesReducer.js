import { Map, List } from 'immutable';
import { propertiesConstants } from '../constants';
import { updated } from '../../utils';

const initialState = Map({
  loading: false,
  error: false,
  properties: List(),
});

const {
  GET_PROPERTIES_STARTED,
  GET_PROPERTIES_SUCCESS,
  GET_PROPERTIES_FAILURE,

  GET_PROPERTY_STARTED,
  GET_PROPERTY_SUCCESS,
  GET_PROPERTY_FAILURE,

  POST_PROPERTY_STARTED,
  POST_PROPERTY_SUCCESS,
  POST_PROPERTY_FAILURE,
} = propertiesConstants;

const propertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROPERTIES_STARTED:
    case GET_PROPERTY_STARTED:
    case POST_PROPERTY_STARTED:
      return state.set('loading', true);

    case GET_PROPERTIES_FAILURE:
    case GET_PROPERTY_FAILURE:
    case POST_PROPERTY_FAILURE:
      return state
        .set('error', action.payload)
        .set('loading', false);

    case GET_PROPERTIES_SUCCESS:
      return state
        .set('properties', action.payload)
        .set('loading', false);

    case GET_PROPERTY_SUCCESS:
      return state
        .set(
          'properties',
          updated(state.get('properties'), action.payload),
        )
        .set('loading', false);

    case POST_PROPERTY_SUCCESS:
    // TODO
      return state;

    default:
      return state;
  }
};

export default propertiesReducer;
