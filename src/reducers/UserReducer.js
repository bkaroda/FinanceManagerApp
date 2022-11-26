import { USER_SIGNUP } from "../actions/Type";

export const userReducer=(state={},action)=>{
    const {type,payload}=action;
    switch(type){
        case USER_SIGNUP:return payload;
        default:return state;
    }
}