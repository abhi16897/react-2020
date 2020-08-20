const updateProductAction=function(value){
   // console.log(value);
    return({
        type:"Update_Product",
        payload:value
    })
}
export default updateProductAction;