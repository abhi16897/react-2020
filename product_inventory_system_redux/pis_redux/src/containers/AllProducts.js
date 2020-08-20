import React from 'react';
import {connect} from 'react-redux';
//import Product from './Product';
import '../styles/product.css'
import { bindActionCreators } from 'redux';
import allproductsAction from '../actions/allproductsaction';
import searchAction from '../actions/searchAction';
//import { bindActionCreators } from 'redux';
class AllProducts extends React.Component {
    state = {  }
    updateItem=(id)=>{
        this.props.history.push('/editproduct/'+id);
    }
    render() { 
        return ( 
            <div>
            <div className="home-search">
                    <input type="text" name="search" className="searchBox" placeholder="Serach for Products" onChange={(e)=>this.props.searchProducts(e.target.value)}/>
                <select onChange={this.selectSort} value={this.state.sort}>
                    <option value=''>Sort Products</option>
                    <option value='name'>By Name</option>
                    <option value='price'>By price</option>
                    <option value='stock'>By Stock</option>
                </select>
                <select onChange={this.selectCategory} value={this.state.category}>
                        <option value=''>Select Category</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Vegitables">Vegitables</option>
                        <option values="Fruits">Fruits</option>
                </select>
              
              
                </div>
            <div className="card-layout">
             {this.props.products.map((prod)=>{
                return(  
                     <div className="card" key={prod.id}>
                    <img src={"images/"+prod.imageUrl} alt="hello"/>
                    <section>
                        <h1><b>{prod.name}</b></h1>
                        <p><b>Price:</b>{prod.price}</p>
                         <p><b>Stock:</b>{prod.stock}</p>
                         <p><b>Description</b>{prod.description}</p>
                         <p><b>Category</b>{prod.categoy}</p>
                    </section>
                    <div className="button">
                        <button id="add" onClick={()=>this.updateItem(prod.id)} type="submit" >UPDATE</button>
                        <button id="delete" onClick={()=>this.props.deleteItem(prod.id)}>DELETE</button>
                    </div> 
                </div>
             )
            }) }
            </div>
            </div>
         );
    }
}
 function maptoState(store){
     return{
        products:store.allProducts
     }
 }
 function mapDispatch(dispatch){
     return bindActionCreators({
         deleteItem:allproductsAction,
         searchProducts:searchAction
     },dispatch)
 }

export default connect(maptoState,mapDispatch)(AllProducts);