import React from 'react';
import './product.css'
class Product extends React.Component {
    constructor(props){
        super(props)
        this.state ={
        }
       
    }
    deleteItem=()=>{
        this.props.itemdelete(this.props.id);
    }
    updateItem=()=>{
        this.props.itemupdate(this.props.id);
    }
    render() { 
        return ( 
            
            <div className="card">
                    <img src={"images/"+this.props.imageUrl} alt="hello"/>
                    <section>
                        <h1><b>{this.props.name}</b></h1>
                        <p><b>Price:</b>{this.props.price}</p>
                         <p><b>Stock:</b>{this.props.stock}</p>
                         <p><b>Description: </b>{this.props.description}</p>
                    </section>
                    <div className="button">
                        <button id="add" onClick={this.updateItem} type="submit" >UPDATE</button>
                        <button id="delete" onClick={this.deleteItem}>DELETE</button>
                    </div>
                </div>
         );
    }
}
 
export default Product;