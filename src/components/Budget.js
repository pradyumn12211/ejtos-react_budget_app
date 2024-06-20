import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, remaining, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [currency, setCurrency] = useState('$'); 

    const handleBudgetChange = (event) => {
        setNewBudget(parseInt(event.target.value));
    };

    const increaseBudget = () => {
        const updatedBudget = newBudget + 10;
        if (updatedBudget <= remaining) {
            setNewBudget(updatedBudget);
            dispatch({ type: 'SET_BUDGET', payload: updatedBudget });
        }
    };

    const decreaseBudget = () => {
        const updatedBudget = newBudget - 10;
        if (updatedBudget >= 0) {
            setNewBudget(updatedBudget);
            dispatch({ type: 'SET_BUDGET', payload: updatedBudget });
        }
    };

    return (
        <div>
            <div className='alert alert-secondary'>
                {/* Currency prefix */}
                <span className="input-group-text">{currency}</span>
                <input type="number" value={newBudget} onChange={handleBudgetChange} />
                <button onClick={increaseBudget}>Increase by 10</button>
                <button onClick={decreaseBudget}>Decrease by 10</button>
            </div>
        </div>
    );
};

export default Budget;
