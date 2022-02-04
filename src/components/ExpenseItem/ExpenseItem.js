import React, {useState} from "react";
import './ExpenseItem.css'
import ExpanseDate from "../ExpanseDate/ExpanseDate";
import Card from "../UI/Card/Card";

const ExpenseItem = (props) => {
    // it's recommended to use 'const' instead of 'let' in state management - useState Hook
    const [title, setTitle] = useState(props.expense.title);
    const [amount, setAmount] = useState(props.expense.amount);
    const [date, setDate] = useState(props.expense.date);

    return (<Card className={'expense-item'}>
        <ExpanseDate date={date}/>
        <div className={'expense-item__description'}>
            <h2>{title}</h2>
            <div className={'expense-item__price'}>&#2547;{amount}</div>
        </div>
    </Card>)
}

export default ExpenseItem;