//It is mandatory for old react versions
import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [toggleNewExpense, setToggleNewExpense] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        toggleNewExpenseEventHandler();
    }

    const toggleNewExpenseEventHandler = () => {
        setToggleNewExpense(prevVal => {
          return !prevVal;
        })
      }

    return <div className="new-expense">
        {!toggleNewExpense && <button onClick={toggleNewExpenseEventHandler}>Add New Expense</button>}
        {toggleNewExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelBtnExpForm={toggleNewExpenseEventHandler}/>}
    </div>
}

export default NewExpense;