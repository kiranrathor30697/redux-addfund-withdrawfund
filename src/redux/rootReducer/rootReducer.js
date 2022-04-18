import { combineReducers } from "redux";
import { ADD_FUND, WITHDRAW_FUND } from "../constants/constants";

export const rootReducer = (initialState,action)=>{
    let newState = initialState;

    switch (action.type){
        case ADD_FUND:
            newState += action.amount 
            break;
        case WITHDRAW_FUND:
            newState -= action.amount 
            break;
        default:
    }
    return newState;
}

/* let reducer_1 = (initialState,action)=>{
    let newState = initialState;

    switch (action.type){
        case Add_Fund:
            newState += action.amount 
            break;
        default:
    }
    return newState;
}
let reducer_2 = (initialState,action)=>{
    let newState_2 = initialState;

    switch (action.type){
        case Withdraw_Fund:
            break;
        default:
    }
    return newState_2;
}
const rootReducer = combineReducers({
    reducer_1, 
    reducer_2
})
export default rootReducer; */