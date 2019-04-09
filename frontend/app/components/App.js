import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from '../store';

import Properties from './views/Properties';
import Property from './views/Property';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/properties" component={Properties} />
        <Route exact path="/properties/:id" component={Property} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
