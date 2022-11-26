import { combineReducers } from "redux";
import transactionReducer from "./TransactionReducer";
import { userReducer } from "react";

const rootReducer=combineReducers({transactionReducer,userReducer});

export default rootReducer