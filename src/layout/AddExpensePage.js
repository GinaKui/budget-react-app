import React from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../slices/expensesSlice';
import ExpenseForm from '../components/ExpenseForm';

export default function AddExpensePage(props) {
  const dispatch = useDispatch();
  const onSubmit = expense => {
    dispatch(addExpense(expense));
    props.history.push('/dashboard');
  };

  return (
    <main>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add an Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm onSubmit={onSubmit} />
      </div>
    </main>
  );
};
