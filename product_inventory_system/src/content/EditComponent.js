import React from 'react';
import './addcomponent.css'
import axios from 'axios';
class EditComponent extends React.Component {
    constructor(){
        super()
        this.state={
            name:'',
            price:0,
            stock:0,
            description:'',
            category:''
        }
    }
    componentWillMount(){
       axios.get('http://localhost:3000/allProducts/'+this.props.match.params.id).then((res)=>{
           console.log(res.data);
           this.setState({
               name:res.data.name,
               price:res.data.price,
               stock:res.data.stock,
               description:res.data.description,
               category:res.data.category
           })
       })
    }
    onChange=(e)=>{
        e.preventDefault()
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmitadd=(e)=>{
        e.preventDefault();
        let addjsonObject={
            "name":this.state.name,
            "price":this.state.price,
            "stock":this.state.stock,
            "description":this.state.description,
            "category":this.state.category,
            "imageUrl":''
        }
        axios.put('http://localhost:3000/allProducts/'+this.props.match.params.id,addjsonObject).then((res)=>{
            console.log(res.data);
            this.props.history.push('/home');
        })
    }
    render() { 
        return (  
            
            <div className="add-form">
            <h1>UPDATE</h1>
            <form onSubmit={this.onSubmitadd}>
            <table>
                <thead></thead>
                <tbody>
                <tr>
                    <td><label>Name</label></td>
                    <td><input type="text" name="name" value={this.state.name} onChange={this.onChange}/></td>
                </tr>
                <tr>
                    <td><label>Price</label></td>
                    <td><input type="number" name="price" value={this.state.price} onChange={this.onChange}/></td>
                </tr>
                <tr>
                    <td><label>Stock</label></td>
                    <td><input type="number" name="stock" value={this.state.stock} onChange={this.onChange}/></td>
                </tr>
                <tr>
                    <td><label>Description</label></td>
                    <td><textarea id="description" name="description" rows="4" cols="30"  value={this.state.description} onChange={this.onChange}></textarea></td>
                </tr>
                <tr>
                    <td><label>Image</label></td>
                    <td><input type="file"/></td>
                </tr>
                <tr>
                    <td><label>Category</label></td>
                    <td><select name='category' onChange={this.onChange} value={this.state.category}>
                        <option value=''>Select One</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Vegitables">Vegitables</option>
                        <option values="Fruits">Fruits</option>
                    </select></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button type="submit">Update</button></td>
                </tr>
                </tbody>
               
            </table>
        </form>
        </div>
        );
    }
}
 
export default EditComponent;