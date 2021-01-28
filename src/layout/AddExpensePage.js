import React from 'react';
import { connect, useDispatch } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
//import { startAddExpense } from '../actions/expenses';
import { addExpense } from '../slices/expensesSlice';
/**
 * @todo change to react function component
 */
function AddExpensePage(props) {
  const dispatch = useDispatch();
  const onSubmit = expense => {
    //this.props.startAddExpense(expense);
    
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


/* const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
}); */

export default AddExpensePage;

//export default connect(undefined, mapDispatchToProps)(AddExpensePage);
