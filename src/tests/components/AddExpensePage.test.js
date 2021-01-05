import React from 'react';
import { shallow } from 'enzyme';
import  { AddExpensePage } from '../../layout/AddExpensePage';
import expenses from '../fixtures/expenses';

let startAddExpense, history, wrapper;
//life cycle method
beforeEach(() => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
});

test('should render AddExpensePage correctly', () => {  
    expect(wrapper).toMatchSnapshot();
});

test('should handle Submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/dashboard');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
});