import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState(2020);

    const onChangeFilterHandler = changedFilter => {
        setFilteredYear(changedFilter)
    }

    const filteredExpenses = props.expenses.filter(item => {
        return filteredYear === new Date(item.date).getFullYear();
    });

    let expensesContent = <p>No expenses found.</p>;

    if(filteredExpenses.length > 0){
        expensesContent = filteredExpenses.map(expense =>
            <ExpenseItem 
                key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}/>)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter onChangeFilter={onChangeFilterHandler} selectedYear={filteredYear} />
            {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
            {filteredExpenses.length > 0 && filteredExpenses.map(expense =>
                <ExpenseItem 
                    key={expense.id}
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date}/>
            )} */}
            {expensesContent}
        </Card>
    )
}

export default Expenses;