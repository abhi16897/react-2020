//import { act } from "react-dom/test-utils";

const allProductsReducers=function allProductsreduce(state=null,action){
    var allProducts= [
        {
          name: 'Lenovo',
          price: '940',
          stock: '530',
          description: 'Elctronics',
          category: 'Electronics',
          imageUrl: 'lenovo.jpg',
          id: 1
        },
        {
          name :'Hp',
          price: '940',
          stock: '600',
          description: 'NIce',
          category: 'Electronics',
          imageUrl: 'hp.jpg',
          id: 2
        },
        {
          name :'Accer',
          price: '940',
          stock: '600',
          description: 'NIce',
          category: 'Electronics',
          imageUrl: 'hp.jpg',
          id: 3
        },
        {
          name :'Dell',
          price: '940',
          stock: '600',
          description: 'NIce',
          category: 'Electronics',
          imageUrl: 'hp.jpg',
          id: 4
        }
    ]
    switch(action.type){
      case 'Delete_Product':
       return state.filter(prod=>action.payload!== prod.id);  

      case 'Add_Product':
        var length=state.length
        return [
          ...state,
          {
            id:++length,
            name:action.payload.name,
            price:action.payload.price,
            category:action.payload.category,
            imageUrl:action.payload.imageUrl,
            stock:action.payload.stock,
            description:action.payload.description,
          }
        ]
      case 'search_product':
        allProducts=allProducts.filter((prod)=>{
          return prod.name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase());
        })
        return allProducts;
      case 'Update_Product':
       // console.log("reducer")
        for (var i in state){
          if(parseInt(action.payload.id)===state[i].id){
           // console.log("reducerIf")
              state[i].name=action.payload.name
              state[i].price=action.payload.price
              state[i].description=action.payload.description
              state[i].stock=action.payload.stock
              state[i].category=action.payload.category
              state[i].imageUrl=action.payload.imageUrl
          }
        }
        return state;
      default:
        break;
    }
    return allProducts;
}
export default allProductsReducers;