import { ALL_EXPENSES, ALL_INCOMES, ALL_TRANSACTIONS, FETCH_FINANCIAL_SUMMARY, INSERT_EXPENSE, INSERT_INCOME } from "../actions/Type";


const transactionReducer=(state=[],action)=>{
     switch (action.type){
        case FETCH_FINANCIAL_SUMMARY: return action.payload;
        case INSERT_INCOME: return action.payload;
        case INSERT_EXPENSE: return action.payload;
        case ALL_EXPENSES: return action.payload;
        case ALL_INCOMES: return action.payload;
        case ALL_TRANSACTIONS: return action.payload;
      
        default: return state;
     }


}
export default transactionReducer;