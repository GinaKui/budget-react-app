import React from 'react';
import ReactDOM from 'react-dom';

import App, { history, store } from './App';
import LoadingPage from './layout/LoadingPage';
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

/* firebase.auth().onAuthStateChanged( user => {
  if (user) {
 //   store.dispatch(login(user.uid));
    store.dispatch(fetchExpenses()).then(() => {
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
}); */

renderApp();