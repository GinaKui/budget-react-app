import uuid from 'uuid';
import {addExpense, removeExpense, editExpense} from '../../actions/expenses';


test('should setup remove expense action object', () => {
  const action = removeExpense({id: '123abc'});

  //toEqual() method will be used to compare array and object
  //toBe() 相当于 ===, 用于比较primitive type
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});


test('should setup edit expense action object', () => {
  const action = editExpense('123abc', {note: 'New note value'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {note: 'New note value'}
  });
});



test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    note: 'This was last months rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

