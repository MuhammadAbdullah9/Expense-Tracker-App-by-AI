import React, { useContext } from 'react'

import { GlobalContext } from './GlobalValue'

export function Balance() {

    const {transactions} = useContext(GlobalContext)

    const transactionAmount = transactions.map(transaction => transaction.amount)

    const balance = Math.abs(transactionAmount
        .reduce((acc, item) => (acc += item),0)
        .toFixed(2));

    return ( 
        <div className="borders">
        <h3 className = "bottom" > CURRENT BALANCE </h3> 
        <h1 id="balance"> ${balance} </h1> 
        </div>
    )
}