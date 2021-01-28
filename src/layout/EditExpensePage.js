import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import expenses from '../selectors/expenses';
//import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import { editExpense, removeExpense } from '../slices/expensesSlice'
/**
 * * @todo change to react function component
 */
export default function EditExpensePage(props) {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const expense = useSelector(({ expenses }) => {
    return expenses.find(entity => entity.id === id);
  });
  const onEdit = (expense) => {
    //this.props.startEditExpense(this.props.expense.id, expense);
    dispatch(editExpense(id, expense))
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

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

//export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);