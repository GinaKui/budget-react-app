import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

 const ExpensesSummary = () => {
	const filteredExpenses = useSelector(selectExpenses);
	const totalExpenses = selectExpensesTotal(filteredExpenses);
	const expenseWord = filteredExpenses.length <= 1 ? 'expense':'expenses';
	const formattedExpensesTotal = numeral(totalExpenses/100).format('$0,0.00');
	return (
		<div className="page-header">
			<div className="content-container">
				<h1 className="page-header__title">Viewing <span>{filteredExpenses.length}</span> {expenseWord} totaling <span>{formattedExpensesTotal}</span></h1>			
				<div className="page-header__actions">
					<Link className="button" to="/create">Add Expense</Link>
				</div>
			</div>
		</div>
	);
};

export default ExpensesSummary;