import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import LoginPage from '../layout/LoginPage';
import ExpenseDashboardPage from '../layout/ExpenseDashboardPage';
import AddExpensePage from '../layout/AddExpensePage';
import EditExpensePage from '../layout/EditExpensePage';
import NotFoundPage from '../layout/NotFoundPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={LoginPage} exact={true} />
      <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
      <PrivateRoute path="/create" component={AddExpensePage} />
      <PrivateRoute path="/edit/:id" component={EditExpensePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
