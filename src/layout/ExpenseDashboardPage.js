import React, { Fragment } from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFilters from '../components/ExpenseListFilters';
import ExpensesSummary from '../components/ExpensesSummary';

const ExpenseDashboardPage = () => (
  <main>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </main>
);

export default ExpenseDashboardPage;