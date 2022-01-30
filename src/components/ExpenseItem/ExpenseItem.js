import React from "react";
import './ExpenseItem.css'
import ExpanseDate from "../ExpanseDate/ExpanseDate";
import Card from "../UI/Card/Card";

class ExpenseItem extends React.Component {
    render() {
        return (<Card className={'expense-item'}>
            <ExpanseDate date={this.props.expense.date}/>
            <div className={'expense-item__description'}>
                <h2>{this.props.expense.title}</h2>
                <div className={'expense-item__price'}>&#2547;{this.props.expense.amount}</div>
            </div>
        </Card>)
    }
}

export default ExpenseItem;