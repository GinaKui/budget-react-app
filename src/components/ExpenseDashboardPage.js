import React, { Fragment } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
  <main>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </main>
);

export default ExpenseDashboardPage;