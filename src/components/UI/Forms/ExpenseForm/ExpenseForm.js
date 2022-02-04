import './ExpenseForm.css'
import {useState} from "react";

const ExpenseForm = (props) => {
    // Multiple State Example
    // const [titleInput, setTitleInput] = useState('');
    // const [amountInput, setAmountInput] = useState(0);
    // const [dateInput, setDateInput] = useState(new Date().toString());

    const [expense, setExpense] = useState({
        title: '', amount: 0, date: ''
    })
    console.log(expense.date);
    const titleChangeHandler = (event) => {
        // it's recommended to use inner arrow function for updating state that depends on previous state.
        setExpense((prevState) => {
            return {
                ...prevState, title: event.target.value
            }
        })
        // setExpenseInput({
        //     ...expenseInput,
        //     titleInput: event.target.value
        // })
    }
    const amountChangeHandler = (event) => {
        setExpense((prevState) => {
            return {
                ...prevState, amount: event.target.value
            }
        })
    }
    const dateChangeHandler = (event) => {
        setExpense((prevState) => {
            return {
                ...expense, date: new Date(event.target.value)
            }

        })
    }
    const onSubmitFormHandler = (event) => {
        event.preventDefault()
        props.onSubmitExpenseData(expense);
        setExpense({
            title: '',
            amount: 0,
            date: ''
        })
    }
    return (<form onSubmit={onSubmitFormHandler}>
        <div className={'new-expense__controls'}>
            <div className={'new-expense__control'}>
                <label>Title</label>
                <input type="text"
                       value={expense.title}
                       placeholder={'Enter expense title'}
                       onChange={titleChangeHandler}/>
            </div>
            <div className={'new-expense__control'}>
                <label>Amount</label>
                <input type="number"
                       min="5"
                       step="5"
                       placeholder={'Enter expense amount'}
                       onChange={amountChangeHandler}/>
            </div>
            <div className={'new-expense__control'}>
                <label>Date</label>
                <input type="date"
                       min="2022-01-01"
                       max="2025-12-31"
                       // value={expense.date}
                       onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className={'new-expense__actions'}>
            <button type={"submit"}>Add Expense</button>
        </div>
    </form>)
}

export default ExpenseForm