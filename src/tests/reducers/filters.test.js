import moment from 'moment';
import filtersReducer from '../../reducers/filters';


//test the default state setup
test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should setup text filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'abc'});
    expect(state.text).toBe('abc');
});


test('should setup sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should setup sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should setup startDate filter', () => {
    const date = moment().subtract(2, 'days');
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: date });
    expect(state.startDate).toEqual(date);
});

test('should setup endDate filter', () => {
    const date = moment().add(2, 'days');
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: date });
    expect(state.endDate).toEqual(date);
});






