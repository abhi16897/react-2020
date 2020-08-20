const searchAction=function(value){
    console.log(value);
    return({
        type:"search_product",
        payload:value
    })
}
export default searchAction;