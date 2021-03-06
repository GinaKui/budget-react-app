import React, { useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import { fetchExpenses } from '../slices/expensesSlice';

const ExpenseList = () => {
  const dispatch = useDispatch();
  const expenses = useSelector(selectExpenses);
  useEffect(() => {
    dispatch(fetchExpenses())
  },[]);
  return (
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      <div className="list-body">
      {
        expenses.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No Expenses</span>
          </div>
        ) : (
        expenses.map( (expense) => (<ExpenseListItem key={expense.id} {...expense} />) ) 
        )
      }
      </div>
    </div>
  );
}

/* const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
}; */

//export default connect(mapStateToProps)(ExpenseList);
export default ExpenseList;
