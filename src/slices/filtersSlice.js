import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const initialState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month').format(),
  endDate: moment().endOf('month').format()
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setTextFilter(state, action) {
      state.text = action.payload;
    },
    sortByAmount(state) {
      state.sortBy = 'amount';
    },
    sortByDate(state) {
      state.sortBy = 'date'
    },
    setStartDate: (state, action)=>{
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    }
  }
});

export const { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } = filtersSlice.actions;
export default filtersSlice.reducer;
