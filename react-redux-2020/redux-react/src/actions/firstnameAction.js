const firstnameAction=function(value) {
    console.log(value)
    return({
        type:"Firstname_Value",
        payload:value
    })
}
export default firstnameAction;