import { propertiesConstants } from '../constants';
import { propertiesService } from '../services';
import { getActions } from '../../utils';

const { start, success, failure } = getActions('FETCH_PROPERTIES', propertiesConstants);

function fetchProperties(params) {
  return (dispatch) => {
    dispatch(start);
    propertiesService
      .fetchProperties(params)
      .then(data => dispatch(success(data)))
      .catch(err => dispatch(failure(err)));
  };
}

const propertiesActions = {
  fetchProperties,
};

export default propertiesActions;
