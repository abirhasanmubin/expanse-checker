import React from "react";
import './ExpenseItem.css'
import ExpanseDate from "../ExpanseDate/ExpanseDate";
import Card from "../UI/Card/Card";

const ExpenseItem = (props) => {

    const onEditButtonClicked = () => {
        this.title = 'Mobile Purchase';
        console.log(this.title);
    }
    let date = props.expense.date;
    let title = props.expense.title;
    let amount = props.expense.amount;

    return (<Card className={'expense-item'}>
        <ExpanseDate date={date}/>
        <div className={'expense-item__description'}>
            <h2>{title}</h2>
            <div className={'expense-item__price'}>&#2547;{amount}</div>
        </div>
        <button onClick={onEditButtonClicked}>Edit Entry</button>
    </Card>)
}

export default ExpenseItem;