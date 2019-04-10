import { makeImmutable } from '../../utils';

function fetchProperties() {
  return fetch(
    '/api/v1/properties',
    {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  ).then(makeImmutable);
}

function fetchProperty(id) {
  return fetch(
    `/api/v1/properties/${id}`,
    {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  ).then(makeImmutable);
}

export default { fetchProperties, fetchProperty };
