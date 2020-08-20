const addProductAction=function(value){
    console.log(value);
    return({
        type:"Add_Product",
        payload:value
    })
}
export default addProductAction;