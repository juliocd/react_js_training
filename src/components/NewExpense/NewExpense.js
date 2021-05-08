//It is mandatory for old react versions
import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    const cancelBtnNewExpensesEventHandler = () => {
        return props.cancelBtn()
    }

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelBtnExpForm={cancelBtnNewExpensesEventHandler}/>
    </div>
}

export default NewExpense;