import { propertiesConstants } from '../constants';
import { propertiesService } from '../services';
import { getActions } from '../../utils';

function fetchProperties(params) {
  const { start, success, failure } = getActions('FETCH_PROPERTIES', propertiesConstants);

  return (dispatch) => {
    dispatch(start);
    propertiesService
      .fetchProperties(params)
      .then(data => dispatch(success(data)))
      .catch(err => dispatch(failure(err)));
  };
}

function fetchProperty(id) {
  const { start, success, failure } = getActions('FETCH_PROPERTY', propertiesConstants);

  return (dispatch) => {
    dispatch(start);
    propertiesService
      .fetchProperty(id)
      .then(data => dispatch(success(data)))
      .catch(err => dispatch(failure(err)));
  };
}

const propertiesActions = {
  fetchProperties,
  fetchProperty,
};

export default propertiesActions;
