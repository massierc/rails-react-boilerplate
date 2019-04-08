import constants from '../constants';
import services from '../services';

const {
  FETCH_PROPERTIES_STARTED,
  FETCH_PROPERTIES_SUCCESS,
  FETCH_PROPERTIES_FAILURE,
} = constants.propertiesConstants;

const { propertiesService } = services;

const fetchPropertiesStarted = ({ type: FETCH_PROPERTIES_STARTED });

function fetchPropertiesSuccess(data) {
  return ({
    type: FETCH_PROPERTIES_SUCCESS,
    payload: data,
  });
}

function fetchPropertiesFailure(err) {
  return ({
    type: FETCH_PROPERTIES_FAILURE,
    payload: err,
  });
}

function fetchProperties(params) {
  return (dispatch) => {
    dispatch(fetchPropertiesStarted);
    propertiesService
      .fetchProperties(params)
      .then(data => dispatch(fetchPropertiesSuccess(data)))
      .catch(err => dispatch(fetchPropertiesFailure(err)));
  };
}

const propertiesActions = {
  fetchProperties,
};

export default propertiesActions;
