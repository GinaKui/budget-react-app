import React from 'react';
import ReactDOM from 'react-dom';

import { firebase } from './firebase';
import App, { history, store } from './App';
import LoadingPage from './layout/LoadingPage';
import { startSetExpenses } from './actions/expenses';
//import { login, logout } from './actions/auth';
import {login, logout } from './slices/authSlice';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(<App />, document.getElementById('root'));
    hasRendered = true;
  }
};

//ReactDOM.render(<LoadingPage />, document.getElementById('root'));

firebase.auth().onAuthStateChanged( user => {
  if (user) {
  //  store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
   // store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});

//renderApp();