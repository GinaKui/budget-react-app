import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import database from '../firebase';
import { store } from '../App'

const initialState = [];

const fetchExpenses = createAsyncThunk('expenses/fetchExpenses', async () => {
  const uid = store.getState().auth.uid;
  console.log('this is fetchexpenses, uid is '+ uid)
  //debug break point
  try{  
    const snapShot = await database.ref(`users/${uid}/expenses`).once('value');
    const result = []
    snapShot.forEach(childSnapShot => {
      result.push({  
        id: childSnapShot.key,
        ...childSnapShot.val()
      })
    })
    return result;
  } catch(err) {
    console.log(err)
  }
});

const addExpense = createAsyncThunk('expenses/addExpense', async expense => {
  const uid = store.getState().auth.uid;
  const {
    description = 'unknown',
    note = '',
    amount = 0,
    createdAt = 0
  } = expense;
  const newExpense = { description, note, amount, createdAt };
  const response = await database.ref(`users/${uid}/expenses`).push(newExpense);
  return {
    id: response.key,
    ...newExpense
  }
});

const removeExpense = createAsyncThunk('expenses/removeExpense', async id => {
  const uid = store.getState().auth.uid;
  await database.ref(`users/${uid}/expenses/${id}`).remove();
  return id
});

const editExpense = createAsyncThunk('expenses/editExpense', async (id, newExpense) => {
  const uid = store.getState().auth.uid;
  console.log('this is editExpense id',id)
  console.log('editExpense, newExpense', newExpense)
  try{
    await database.ref(`users/${uid}/expenses/${id}`).update(newExpense);
    return {
      id,
      updates:newExpense
    }
  } catch(err) {
    console.log(err)
  }
})

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchExpenses.fulfilled]: (state, action) => {
      return action.payload
    },
    [addExpense.fulfilled]: (state, action) => {
      state.expenses.push(action.payload);
    },
    [removeExpense.fulfilled]: (state, action) => {
      state.expenses = state.expenses.filter(expense => expense.id !== action.payload);
    },
    [editExpense.fulfilled]: (state, action) => {
      state.expenses = state.expenses.map(expense => {
        if(expense.id === action.payload.id) {
          return {
            ...expense,
            ...action.payload.updates
          }
        } else {
          return expense
        }
      });
    }
  }
});

export { fetchExpenses, addExpense, removeExpense, editExpense }
export default expensesSlice.reducer;