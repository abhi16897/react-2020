
const firstnameReducer= function firstnameAction(state=null,action) {
    switch(action.type){
        case "Firstname_Value":
            console.log("firstname reducer    "+action.payload);
            return action.payload
        default :
        break;
    }
    return state
}
export default firstnameReducer;
