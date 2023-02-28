import React from 'react';

const ExpenseItems = (props) => {

    return (
        <div className='wrapper'>
            <div>{props.date.toISOString()}</div>
            <div>
                <h2>{props.title}</h2>
                <div>{props.amount}</div>
            </div>
        </div>
    );
};

export default ExpenseItems;