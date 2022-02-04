import './NewExpense.css'
import ExpenseForm from "../UI/Forms/ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
    const onSubmitExpenseDataHandler = (expenseInput) => {
        const expense = {
            id: Math.random().toString(),
            ...expenseInput
        }
        props.onNewExpense(expense)
    }

    return (<div className={'new-expense'}>
        <ExpenseForm onSubmitExpenseData={onSubmitExpenseDataHandler}/>
    </div>)
}

export default NewExpense;