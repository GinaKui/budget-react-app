import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import database from '../firebase';

const initialState = [];

const fetchExpenses = createAsyncThunk('expenses/fetchExpenses', async () => {
  const uid = getState().auth.uid;
  const snapShot = await database.ref(`users/${uid}/expenses`).once('value');
  return snapShot.map(childSnapShot => ({
    id: childSnapShot.key,
    ...childSnapShot.val()
  }))
});

const addExpense = createAsyncThunk('expenses/addExpense', async expense => {
  const uid = getState().auth.uid;
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
  const uid = getState().auth.uid;
  await database.ref(`users/${uid}/expenses/${id}`).remove();
  return id
});

const editExpense = createAsyncThunk('expenses/editExpense', async (id, updates) => {
  const uid = getState().auth.uid;
  await database.ref(`users/${uid}/expenses/${id}`).update(updates);
  return {
    id,
    updates
  }
})

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchExpenses.fulfilled]: (state, action) => {
      state = action.payload
    },
    [addExpense.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [removeExpense.fulfilled]: (state, action) => {
      state = state.filter(expense => expense.id !== action.payload);
    },
    [editExpense.fulfilled]: (state, action) => {
      state = state.map(expense => {
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