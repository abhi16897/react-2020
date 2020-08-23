const sortProductsAction=function(value){
    //console.log(value);
    return({
        type:"sort_product",
        payload:value
    })
}
export default sortProductsAction;