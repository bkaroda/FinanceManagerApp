import { fetchFinacialSummary,saveIncome,saveExpense, fetchAllExpenses, fetchAllIncome, fetchAllTransactions } from "../services/TransactionService";
import { ALL_EXPENSES, ALL_INCOMES, ALL_TRANSACTIONS, FETCH_FINANCIAL_SUMMARY, INSERT_EXPENSE, INSERT_INCOME } from "./Type";

export const getFinacialSummary=()=>async(dispatch)=>{
    try {
        const response=await fetchFinacialSummary();
        dispatch({
            type:FETCH_FINANCIAL_SUMMARY,
            payload: response.data,
        })
    } catch (error) {
        console.log(error);
    }

}

export const insertIncome=(income)=>async(dispatch)=>{
    try {
        const response=await saveIncome(income);
        dispatch({
            type: INSERT_INCOME,
            payload: response.data
        });
        return Promise.resolve(response)
    } catch (error) {
           console.log(error);
           return Promise.reject(error)
    }

}

export const insertExpense=(expense)=>async(dispatch)=>{
    try {
        const response=await saveExpense(expense);
        dispatch({
            type: INSERT_EXPENSE,
            payload: response.data
        });
        return Promise.resolve(response);
    } catch (error) {
        console.log(error);
        return Promise.reject(error)
        
    }

}
export const viewAllExpenses=()=>async(dispatch)=>{
   try {
    const response=await fetchAllExpenses()
    dispatch({
        type:ALL_EXPENSES,
        payload:response.data
    });
    

   } catch (error) {
    console.log(error);
   }
}

export const viewAllIncomes=()=>async(dispatch)=>{
    try {
        const response=await fetchAllIncome()
        dispatch({
            type:ALL_INCOMES,
            payload:response.data
        });
        
    } catch (error) {
        console.log(error);
        
    }

}

export const viewAllTransactions=()=>async(dispatch)=>{
    try {
        const response=await fetchAllTransactions()
        dispatch({
            type:ALL_TRANSACTIONS,
            payload:response.data
        });
        
    } catch (error) {
        console.log(error);
        
    }

}