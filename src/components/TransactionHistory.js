import React, { useContext } from 'react'

import { Transaction } from './Transaction'

import { GlobalContext } from '../components/GlobalValue'

export function TransactionHistory(){

    const {transactions} = useContext(GlobalContext)

    return(
        <div>
            <h3 className="fit">Transaction History</h3>
            <hr className="full"/>
            <ul className="list">
                {transactions.map(transaction=>
                  (
                  <Transaction key={transaction.id} transaction={transaction}></Transaction>
                  )
                )}
            </ul>
        </div>
    )
}