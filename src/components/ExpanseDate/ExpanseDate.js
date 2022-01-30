import React from "react";
import './ExpenseDate.css'

class ExpanseDate extends React.Component {
    month = this.props.date.toLocaleString('en-US', {month: 'long'});
    day = this.props.date.toLocaleString('en-US', {day: '2-digit'});
    year = this.props.date.getFullYear();

    render() {
        return (<div className={'expense-date'}>
            <div className={'expense-date__month'}>{this.month}</div>
            <div className={'expense-date__year'}>{this.year}</div>
            <div className={'expense-date__day'}>{this.day}</div>
        </div>)
    }
}

export default ExpanseDate