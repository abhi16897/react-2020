import React from 'react';
import Product from './Product';
import axios from 'axios';
class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
        allproducts:[],
        orginalList:[]
        }
    }
    componentWillMount(){
        this.getAllproducts();
    }
    getAllproducts=()=>{
        console.log('hello');
        axios.get('http://localhost:3000/allProducts').then((res)=>{
            console.log(res.data);
            this.setState({
                allproducts:res.data
            });
            this.setState({
                orginalList:res.data
            })
        })
    }
    deleteItem=(id)=>{
        axios.delete('http://localhost:3000/allProducts/'+id).then((res)=>{
            console.log(res);
            this.getAllproducts();
        },(err)=>{
            console.log(err);
        })
    }
    updateItem=(id)=>{
        this.props.history.push('/editproduct/'+id);
    }
    renderall=()=>{
        return this.state.allproducts.map((prod)=>{
            return (
                <Product key={prod.id}
                        id={prod.id}
                        name={prod.name}
                        price={prod.price}
                        stock={prod.stock}
                        imageUrl={prod.imageUrl}
                        description={prod.description}
                        category={prod.category}
                        itemdelete={this.deleteItem}
                        itemupdate={this.updateItem}
                >
                </Product>
            )
        })
    }
    searchProducts=(e)=>{
        console.log(this.state.orginalList)
        if(e.target.value!==''){
            console.log(e.target.value)
            //let filterdValues=this.state.allproducts
            let filterdValues=this.state.orginalList.filter((f)=>{
                return f.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase());
            })
            this.setState({allproducts:filterdValues});
        }else{
            this.getAllproducts();
        }
     
    }
    render() { 
        return (  
            <div>
                <h1>Welcome Home!</h1>
                <input type="text" name="search" onChange={this.searchProducts}/>
                <div>
                {this.renderall()}
                </div>
               
               </div>
        );
    }
}
 
export default Home;