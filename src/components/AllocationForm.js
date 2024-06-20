import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = () => {
    const { dispatch, remaining, currency } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {
     
    };

    const decreaseAllocation = () => {
        const updatedCost = parseInt(cost) - 10;
        if (updatedCost >= 0) {
            setCost(updatedCost.toString());
        }
    };

    const increaseAllocation = () => {
        const updatedCost = parseInt(cost) + 10;
        setCost(updatedCost.toString());
    };

    return (
        <div>
            <div className='row'>
                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing"> Marketing</option>
                        <option value="Sales" name="sales">Sales</option>
                        <option value="Finance" name="finance">Finance</option>
                        <option value="HR" name="hr">HR</option>
                        <option value="IT" name="it">IT</option>
                        <option value="Admin" name="admin">Admin</option>
                    </select>

                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                    </select>

                    {/* Currency prefix */}
                    <div className="input-group-prepend">
                        <span className="input-group-text">{currency}</span>
                    </div>

                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        style={{ marginLeft: '2rem' }}
                        onChange={(event) => setCost(event.target.value)}
                    />

                    {/* Decrease button */}
                    <button className="btn btn-danger" onClick={decreaseAllocation} style={{ marginLeft: '1rem' }}>
                        Decrease -10
                    </button>

                    {/* Increase button */}
                    <button className="btn btn-primary" onClick={increaseAllocation} style={{ marginLeft: '1rem' }}>
                        Increase +10
                    </button>

                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllocationForm;
