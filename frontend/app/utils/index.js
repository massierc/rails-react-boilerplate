import { fromJS } from 'immutable';

export function normalize(raw) {
  return raw.json().then(data => fromJS(data));
}

export default {
  normalize,
};
