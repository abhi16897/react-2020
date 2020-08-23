const selectCategoryAction=function(value){
    //console.log(value);
    return({
        type:"category_product",
        payload:value
    })
}
export default selectCategoryAction;