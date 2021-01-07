import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState({ description });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onNoteChange = e => {
    const note = e.target.value;
    this.setState({ note });
  };
  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({ amount });
    }
  };
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState({ createdAt });
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState({ calendarFocused: focused });
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState({ error: 'Please provide description and amount.' });
    } else {
      this.setState({ error: '' });
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    const { description, amount, createdAt, note, calendarFocused, error } = this.state;
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {error && <p className="form__error">{error}</p>}
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={description}
          onChange={this.handleChange}
          autoFocus
          className="text-input"
          required
        />
        <input
          type="text"
          placeholder="Amount"
          name="amount"
          className="text-input"
          required
          value={amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={createdAt}
          onDateChange={this.onDateChange}
          focused={calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          placeholder="Add a note for your expense (optional)"
          className="textarea"
          name="note"
          value={note}
          onChange={this.onNoteChange}
        >
        </textarea>
        <div>
         <button className="button">Save</button>
        </div>
      </form>
    )
  }
}
