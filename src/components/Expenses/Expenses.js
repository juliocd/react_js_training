import React, {useState} from 'react';

import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState(2020);

    const onChangeFilterHandler = changedFilter => {
        setFilteredYear(changedFilter)
    }

    const filteredExpenses = props.expenses.filter(item => {
        return filteredYear === new Date(item.date).getFullYear();
    });

    return (
        <Card className="expenses">
            <ExpensesFilter 
                onChangeFilter={onChangeFilterHandler} 
                selectedYear={filteredYear} />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
}

export default Expenses;