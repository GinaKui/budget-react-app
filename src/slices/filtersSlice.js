import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const initialState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setTextFilter(state, action) {
      state.text = action.payload;
    },
    sortByAmount(state, action) {
      state.sortBy = 'amount';
    },
    sortByDate(state, action) {
      state.sortBy = 'date'
    },
    setStartDate(state, action) {
      state.startDate = action.payload;
    },
    setEndDate(state, action) {
      state.endDate = action.payload;
    }
  }
});

export const { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } = filtersSlice.actions;
export default filtersSlice.reducer;
