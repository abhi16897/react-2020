const allproductsAction=function(value){
    console.log(value);
    return({
        type:"Delete_Product",
        payload:value
    })
}
export default allproductsAction;