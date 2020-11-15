export default (state , action) => {
    switch(action.type) {
        case 'Delete_Transaction' :
            return{
                ...state,
                transactions: state.transactions
                     .filter(transaction => transaction.id !== action.payload)
            }
        case 'AddTransaction':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default : 
            return state;
    }
}