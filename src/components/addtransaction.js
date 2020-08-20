import React, { useState,useContext } from 'react';

import { GlobalContext } from '../context/globalstate';

export default function AddTransaction() {
    const [ text , setText ] = useState("");
    const [ amount , setAmount ] = useState("");

    const { addTransaction } = useContext(GlobalContext);

    const submit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount: +amount
        };

        addTransaction(newTransaction);
        setText("");
        setAmount("");
    }    

    return (
        <div>
            <h3>Add Transaction</h3>
            <form onSubmit={submit}>
                <div className="form-control">
                    <label for="text">Text</label>
                    <input type="text" placeholder="Enter text..." value={text} onChange={(e) => {setText(e.target.value)}}/>
                </div>
                <div className="form-control">
                    <label for="amount">
                    Amount <br/>
                    (negative - expense, positive - income)
                    </label>
                    <input type="number" placeholder="Enter amount..." value={amount} onChange={(e) => {setAmount(e.target.value)}}/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    );
}