const lastnameAction=function (value) {
    console.log(value)
    return({
        type:'Last_Name',
        payload:value
    })
}
export default lastnameAction;