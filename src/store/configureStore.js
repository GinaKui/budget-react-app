import { configureStore } from '@reduxjs/toolkit'
import expensesReducer from '../slices/expensesSlice';
import filtersReducer from '../slices/filtersSlice'
import authReducer from '../slices/authSlice';

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