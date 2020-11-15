import React, { useContext } from 'react'

import { GlobalContext } from './GlobalValue'

export function Transaction({ transaction }) {

    const { delTransaction } = useContext(GlobalContext)
    const sign = transaction.amount > 0 ? '+' : '-'
    const transactionType = transaction.amount > 0 ? 'plus' : 'minus'

    return (
        <li className={transactionType}>
            <button className="del-btn" onClick={() => delTransaction(transaction.id)}>X</button>
            {transaction.description}
            <span>{sign}${Math.abs(transaction.amount)}</span>
        </li>
    )

}