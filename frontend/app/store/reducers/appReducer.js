import { Map } from 'immutable';

const initialState = Map({
  loaded: false,
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_APP':
      return state.set('loaded', true);
    default:
      return state;
  }
};

export default appReducer;
