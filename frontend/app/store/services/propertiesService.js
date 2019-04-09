import { normalize } from '../../utils';

function fetchProperties(params) {
  return fetch(
    '/api/v1/properties',
    {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  ).then(normalize);
}

export default { fetchProperties }
