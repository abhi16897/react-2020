import React from 'react';
import {connect} from 'react-redux';
import '../styles/addcomponent.css'
import addProductAction from '../actions/addProductActioin'
import { bindActionCreators } from 'redux';
//import axios from 'axios';

class AddComponent extends React.Component {
    constructor(){
        super()
        this.state={
            name:'',
            price:'',
            stock:'',
            description:'',
            category:'',
            imageUrl:'',
            buttonStatus:true,

            //Error
            nameError:'',
            priceError:'',
            stockError:'',
            descriptionError:'',
            categoryError:''
        }
    }
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});   
    }
    onSubmitadd=(e)=>{
        e.preventDefault();
        let addjsonObject={
            "name":this.state.name,
            "price":this.state.price,
            "stock":this.state.stock,
            "description":this.state.description,
            "category":this.state.category,
            "imageUrl":this.state.imageUrl
        };
        this.props.addproduct(addjsonObject);
        this.props.history.push('/home');
    
    }
    checkValidation=(event)=>{
        let nameerror=''
        let priceerror=''
        let stockerror=''
        let descriptionerror=''
        let categoryerror=''

        if(event==='name' && this.state.name ===''){
            nameerror='name is required'
        }
        if(event === 'price' && (this.state.price==='' || this.state.price<=0)){
            priceerror='price is required/Invalid'
        }
        if(event ==='stock' && (this.state.stock==='' || this.state.stock<=0)){
            stockerror='stock is required/Invalid'
        }
        if(event ==='description' && this.state.description ===''){
            descriptionerror='description is required'
        }
        if(event ==='category' && this.state.category ===''){
            categoryerror='category is required'
        }
        if(nameerror|| stockerror|| priceerror || descriptionerror || categoryerror){
            this.setState({
                nameError:nameerror,
                priceError:priceerror,
                stockError:stockerror,
                descriptionError:descriptionerror,
                categoryError:categoryerror,
            })
            return false
        }
        this.setState({
            nameError:'',
            priceError:'',
            stockError:'',
            descriptionError:'',
            categoryError:'',
            buttonStatus:false
        })
        return true

    }
    onblurname=(event)=>{
        this.setState({name:event.target.value})
        this.checkValidation('name')
    }
    onblurprice=(event)=>{
        this.setState({price:event.target.value})
        this.checkValidation('price')
    }
    onblurstock=(event)=>{
        this.setState({stock:event.target.value})
        this.checkValidation('stock')
    }
    onblurdescription=(event)=>{
        this.setState({description:event.target.value})
        this.checkValidation('description')
    }
    onblurselect=(event)=>{
        this.setState({category:event.target.value})
        this.checkValidation('category')
    }
    onChangeImage=(e)=>{
        console.log(e.target.files[0].name);
        this.setState({imageUrl:e.target.files[0].name});
    }
    render() { 
        return ( 
            <div className="add-form">
            <h1>ADD</h1>
            <form >
            <table>
                <thead></thead>
                <tbody>
                <tr>
                    <td><label><span className="star">*</span><b>Name</b></label></td>
                    <td><input type="text" name="name" value={this.state.name} onChange={this.onChange} required onBlur={this.onblurname}/>
                    <span className="error">{this.state.nameError}</span>
                    </td>
                </tr>
                <tr>
                    <td><label><span className="star">*</span><b>Price</b></label></td>
                    <td><input type="number" name="price" value={this.state.price} onChange={this.onChange} onBlur={this.onblurprice}/>
                    <span className="error">{this.state.priceError}</span>
                    </td>
                </tr>
                <tr>
                    <td><label><span className="star">*</span><b>Stock</b></label></td>
                    <td><input type="number" name="stock" value={this.state.stock} onChange={this.onChange} onBlur={this.onblurstock}/>
                    <span className="error">{this.state.stockError}</span>
                    </td>
                </tr>
                <tr>
                    <td><label><span className="star">*</span><b>Description</b></label></td>
                    <td><textarea id="description" name="description" rows="4" cols="30"  value={this.state.description} onChange={this.onChange} onBlur={this.onblurdescription}></textarea>
                    <span className="error">{this.state.descriptionError}</span>
                    </td>
                </tr>
                <tr>
                    <td><label><span className="star">*</span><b>Image</b></label></td>
                    <td><input type="file"name="imageUrl" onChange={this.onChangeImage} required/></td>
                </tr>
                <tr>
                    <td><label><span className="star">*</span><b>Category</b></label></td>
                    <td><select name='category' onChange={this.onChange} onBlur={this.onblurselect}>
                        <option value=''>Select One</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Vegitables">Vegitables</option>
                        <option values="Fruits">Fruits</option>
                    </select>
                    <span className="error">{this.state.categoryError}</span>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td><button type="submit" disabled={this.state.buttonStatus} onClick={this.onSubmitadd}>Add</button></td>
                </tr>
                </tbody>
               
            </table>
        </form>
        </div>

         );
    }
}
 function maptoDispatch(dispatch){
     return bindActionCreators({
        addproduct:addProductAction
     },dispatch)
 }
export default connect(null,maptoDispatch)(AddComponent);