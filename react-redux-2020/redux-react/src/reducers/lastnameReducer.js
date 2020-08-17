

const lastnamereducer=function lastnameAction(state=null,action){
    console.log("lastname Reducer")
    switch(action.type){
        case 'Last_Name':
            return action.payload
        default :
        break;
    }
    return state
}
export default lastnamereducer;