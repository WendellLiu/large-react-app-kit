// @flow
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from '../components/app';
import CssTest from '../components/CssTest';

const AppRoute: () => React.Node = () => (
  <App>
    <Switch>
      <Route exact path="/" component={() => <div>app</div>} />
      <Route exact path="/css-test" component={CssTest} />
    </Switch>
  </App>
);

export default AppRoute;
