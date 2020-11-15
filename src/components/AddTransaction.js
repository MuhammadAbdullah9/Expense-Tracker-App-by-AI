import React, { useState, useContext } from 'react'

import { GlobalContext } from './GlobalValue'

export function AddTransaction() {

    const [description, setDescription] = useState()
    const [amount, setAmount] = useState()

    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            description,
            amount: +amount
        }
        addTransaction(newTransaction)
    }

    return (
        <div>
            <div>
                <h3 className="fit">Add New Transaction</h3>
            </div>
            <hr className="full" />
            <form onSubmit={onSubmit}>
                <div className="transaction">
                    <div className="inputs">
                        <label htmlFor="description">Description</label> <br />
                        <input type="text" value={description} id="description" onChange={(e) => setDescription(e.target.value)} placeholder="enter details of your transaction" />
                    </div>
                    <div className="inputs">
                        <label htmlFor="amount">Transaction Amount</label> <br />
                        <input type="number" value={amount} id="amount" onChange={(e) => setAmount(e.target.value)} placeholder="enter value of transaction" />
                        <small><p>(Add <b>'+'</b> for income and <b>'-'</b> for expense before amount)</p></small>
                    </div>
                    <br />
                    <button className="add-amount">Add Transaction</button>
                </div>
            </form>
        </div>
    )
}