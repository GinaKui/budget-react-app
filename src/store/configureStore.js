import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
//import expensesReducer from '../reducers/expenses';
import expensesReducer from '../slices/expensesSlice';
//import filtersReducer from '../reducers/filters';
import filtersReducer from '../slices/filtersSlice'
//import authReducer from '../reducers/auth';
import authReducer from '../slices/authSlice';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * @TODO refactor redux store to use redux toolkit
 */
export default () => {
  const store = configureStore({
    reducer: {
      expenses: expensesReducer,
      filters: filtersReducer,
      auth: authReducer
    }
  });

  return store;
};