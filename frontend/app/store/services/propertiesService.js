import { makeImmutable } from '../../utils';

function getProperties() {
  return fetch(
    '/api/v1/properties',
    {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  ).then(makeImmutable);
}

function getProperty(id) {
  return fetch(
    `/api/v1/properties/${id}`,
    {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  ).then(makeImmutable);
}

function postProperty() {
  return fetch(
    '/api/v1/properties',
    {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      method: 'post',
    },
  ).then(makeImmutable);
}

export default { getProperties, getProperty, postProperty };
