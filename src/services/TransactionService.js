import axios from 'axios';

const BASE_URL='http://localhost:7500/trans'

export function fetchFinacialSummary(){
    return axios.get(`${BASE_URL}/summary/63216995904d8bd60ec17db9`)
}

export function saveIncome(income){
    return axios.post(`${BASE_URL}/`,income)
}

export function saveExpense(expense){
    return axios.post(`${BASE_URL}/`,expense)
}

export function fetchAllExpenses(){
    return axios.get(`${BASE_URL}/expenses/63216995904d8bd60ec17db9`)
}

export function fetchAllIncome(){
    return axios.get(`${BASE_URL}/income/63216995904d8bd60ec17db9`)
}

export function fetchAllTransactions(){
    return axios.get(`${BASE_URL}/alltransactions/63216995904d8bd60ec17db9`)
}