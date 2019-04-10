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

export function updated(list, el) {
  const id = list.findIndex(item => item.get('id') === el.get('id'));
  return id < 0 ? list.push(el) : list.set('id', el);
}

export function findIn(list, id) {
  const index = list.findIndex(item => item.get('id') === parseInt(id, 10));
  return list.get(index);
}
