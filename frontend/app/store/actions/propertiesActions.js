import { propertiesConstants } from '../constants';
import { propertiesService } from '../services';
import { createAction } from '../../utils';

function getProperties(params) {
  return createAction({
    action: 'GET_PROPERTIES',
    constants: propertiesConstants,
    service: propertiesService.getProperties(params),
  });
}

function getProperty(params) {
  return createAction({
    action: 'GET_PROPERTY',
    constants: propertiesConstants,
    service: propertiesService.getProperty(params),
  });
}

function postProperty() {
  return createAction({
    action: 'POST_PROPERTY',
    constants: propertiesConstants,
    service: propertiesService.postProperty(),
  });
}

const propertiesActions = {
  getProperties,
  getProperty,
  postProperty,
};

export default propertiesActions;
