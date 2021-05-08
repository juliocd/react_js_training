import React, {useState} from 'react';

import ExpensesList from './ExpensesList';
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

    return (
        <Card className="expenses">
            <ExpensesFilter onChangeFilter={onChangeFilterHandler} selectedYear={filteredYear} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
}

export default Expenses;