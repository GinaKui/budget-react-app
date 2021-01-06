import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import { startAddExpense } from '../actions/expenses';
/**
 * @todo change to react function component
 */
export class AddExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.startAddExpense(expense);
    this.props.history.push('/dashboard');
  };
  render() {
    return (
      <main>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add an Expense</h1>
          </div>
        </div>
        <div className="content-container">
         <ExpenseForm onSubmit={this.onSubmit} />
        </div>
      </main>
    );
  }
};


const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
