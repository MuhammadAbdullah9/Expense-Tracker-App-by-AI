import React , {createContext , useReducer} from 'react'

import Reducer from './Reducer'

const initialState = {
    transactions : []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state , dispatch] = useReducer(Reducer , initialState)

    function delTransaction(id){
        dispatch({
            type: 'Delete_Transaction',
            payload: id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type: 'addTransaction',
            payload: transaction
        })
    }


    return (
        <GlobalContext.Provider value={
            {
                transactions : state.transactions,
                delTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}