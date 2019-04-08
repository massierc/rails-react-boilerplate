import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from '../store';

import Properties from './views/Properties';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Properties} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
