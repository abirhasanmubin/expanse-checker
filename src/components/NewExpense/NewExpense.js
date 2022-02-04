import './NewExpense.css'
import ExpenseForm from "../UI/Forms/ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
    return (<div className={'new-expense'}>
        <ExpenseForm/>
    </div>)
}

export default NewExpense;