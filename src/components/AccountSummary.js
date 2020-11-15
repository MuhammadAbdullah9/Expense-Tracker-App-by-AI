import React, { useContext } from 'react'

import { GlobalContext } from './GlobalValue'

export function AccountSummary() {

    const { transactions } = useContext(GlobalContext)

    const transactionAmount = transactions.map(transaction => transaction.amount)

    const income = transactionAmount
        .filter(transaction => transaction > 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        .toFixed(2);
    const expense = (transactionAmount
        .filter(transaction => transaction < 0)
        .reduce((acc, transaction) => (acc += transaction), 0)
        .toFixed(2));

    return (
        <div className="inc-exp">
            <div className="income">
                <h4>INCOME</h4>
                <p>{income}</p>
            </div>
            <hr className="half" />
            <div className="expense">
                <h4>EXPENSE</h4>
                <p>{expense}</p>
            </div>
        </div>
    )
}