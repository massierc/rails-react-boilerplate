import { fromJS } from 'immutable';

export function makeImmutable(raw) {
  return raw.json().then(data => fromJS(data));
}

export function getActions(type, constants) {
  return {
    start: {
      type: constants[`${type}_STARTED`],
    },
    success: data => ({
      type: constants[`${type}_SUCCESS`],
      payload: data,
    }),
    failure: err => ({
      type: constants[`${type}_FAILURE`],
      payload: err,
    }),
  };
}
