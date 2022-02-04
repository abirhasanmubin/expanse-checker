import React, {useState} from "react";
import './ExpenseItem.css'
import ExpanseDate from "../ExpanseDate/ExpanseDate";
import Card from "../UI/Card/Card";

const ExpenseItem = (props) => {

    const onEditButtonClicked = () => {
        setTitle('Mobile Purchase');
    }
    let [date, setDate] = useState(props.expense.date);
    let [title, setTitle] = useState(props.expense.title);
    let [amount, setAmount] = useState(props.expense.amount);

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