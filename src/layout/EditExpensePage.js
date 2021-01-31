import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editExpense, removeExpense } from '../slices/expensesSlice'
import ExpenseForm from '../components/ExpenseForm';

export default function EditExpensePage(props) {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const expense = useSelector(({ expenses }) => {
    return expenses.find(entity => entity.id === id);
  });
  const onEdit = updates => {
    dispatch(editExpense({ ...updates, id }))
    props.history.push('/dashboard');
  };
  const onRemove = () => {
    dispatch(removeExpense(id));
    props.history.push('/dashboard');
  };
 
  return (
    <main>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm
          expense={expense}
          onSubmit={onEdit}
        />
        <button className="button button--secondary" onClick={onRemove}>Delete this Expense</button>
      </div>      
    </main>
  ); 
}
