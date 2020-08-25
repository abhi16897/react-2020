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
            category:'',
            imageUrl:'',

            nameError:'',
            priceError:'',
            stockError:'',
            descriptionError:'',
            categoryError:''
        }
        
    }
    componentDidMount(){
        if(localStorage.getItem('loggedIn') === null){
            this.props.history.push('/');
        }
       axios.get('http://localhost:3000/allProducts/'+this.props.match.params.id).then((res)=>{
          
           this.setState({
               name:res.data.name,
               price:res.data.price,
               stock:res.data.stock,
               description:res.data.description,
               category:res.data.category,
               imageUrl:res.data.imageUrl
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
            "imageUrl":this.state.imageUrl,
            "username":localStorage.getItem('username')
        }
        axios.put('http://localhost:3000/allProducts/'+this.props.match.params.id,addjsonObject).then((res)=>{
            this.props.history.push('/home');
        })
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
        if(event ==='stock' && (this.state.stock==='' || this.state.stock<0)){
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
                categoryError:categoryerror
            })
            return false
        }
        this.setState({
            nameError:'',
            priceError:'',
            stockError:'',
            descriptionError:'',
            categoryError:''
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
    onChangeimage=(event)=>{
        this.setState({imageUrl:event.target.files[0].name})
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
                    <td><label><span className="star">*</span><b>Name</b></label></td>
                    <td><input type="text" name="name" value={this.state.name} onChange={this.onChange} onBlur={this.onblurname}/>
                    <span className="error">{this.state.nameError}</span></td>
                </tr>
                <tr>
                    <td><label><span className="star">*</span><b>Price</b></label></td>
                    <td><input type="number" name="price" value={this.state.price} onChange={this.onChange} onBlur={this.onblurprice}/>
                    <span className="error">{this.state.priceError}</span></td>
                </tr>
                <tr>
                    <td><label><span className="star">*</span><b>Stock</b></label></td>
                    <td><input type="number" name="stock" value={this.state.stock} onChange={this.onChange} onBlur={this.onblurstock}/>
                    <span className="error">{this.state.stockError}</span></td>
                </tr>
                <tr>
                    <td><label><span className="star">*</span><b>Description</b></label></td>
                    <td><textarea id="description" name="description" rows="4" cols="30"  value={this.state.description} onChange={this.onChange} onBlur={this.onblurdescription}>
                    <span className="error">{this.state.descriptionError}</span>
                    </textarea>
                        
                    </td>
                </tr>
                <tr>
                    <td><label><b>Image</b></label></td>
                    <td><input type="file" name="imageUrl" onChange={this.onChangeimage} /></td>
                </tr>
                <tr>
                    <td><label><span className="star">*</span><b>Category</b></label></td>
                    <td><select name='category' onChange={this.onChange} value={this.state.category} onBlur={this.onblurselect}>
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