 const {  ADD_FUND, WITHDRAW_FUND } = require("../constants/constants")


export const addFundActionCreator = (olddata)=>{ 
    return {
        type:ADD_FUND,
        amount:olddata
    }
}
export const withdrawFundActionCreator = (olddata)=>{ 
    return {
        type:WITHDRAW_FUND,
        amount:olddata
    }
}