import ExpenseItem from "../ExpenseItem/ExpenseItem";
import React from "react";
import './App.css'
import Card from "../UI/Card/Card";

class App extends React.Component {
    expenses = [{
        id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14),
    }, {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)}, {
        id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28),
    }, {
        id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12),
    }];

    render() {
        return (<div>
            <Card className={'expenses'}>
                <ExpenseItem expense={this.expenses[0]}/>
                <ExpenseItem expense={this.expenses[1]}/>
                <ExpenseItem expense={this.expenses[2]}/>
                <ExpenseItem expense={this.expenses[3]}/>
            </Card>
        </div>)
    }
}

export default App;
