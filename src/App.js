import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import configureStore from './store/configureStore';
import PrivateRoute from './routers/PrivateRoute';
import LoginPage from './layout/LoginPage';
import ExpenseDashboardPage from './layout/ExpenseDashboardPage';
import AddExpensePage from './layout/AddExpensePage';
import EditExpensePage from './layout/EditExpensePage';
import NotFoundPage from './layout/NotFoundPage';

export const history = createBrowserHistory();
export const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </Provider>
);

export default App;

/**
 * @todo should use BrowserRouter instead of Router
 */
