import { combineReducers } from "redux";
import transactionReducer from "./TransactionReducer";
import { userReducer } from "./UserReducer";

const rootReducer=combineReducers({transactionReducer,userReducer});

export default rootReducer