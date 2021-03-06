import React from 'react';
import Product from '../product/Product';
import axios from 'axios';
import './home.css'
import Paginationp from '../pagination/Pagination'
class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
        allproducts:[],
        orginalList:[],
        sort:'',
        category:'',
        currentPage:1,
        postPerpage:1,
        }
    }
    componentDidMount(){
        if(localStorage.getItem('loggedIn') === null){
            this.props.history.push('/');
        }
        this.getAllproducts();
    }
    getAllproducts=()=>{
      
        axios.get('http://localhost:3000/allProducts/?username='+localStorage.getItem('username')).then((res)=>{
          
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
           
            this.getAllproducts();
        },(err)=>{
            console.log(err);
        })
    }
    updateItem=(id)=>{
        this.props.history.push('/editproduct/'+id);
    }
    renderall=()=>{
        const indexofLastPost=this.state.currentPage*this.state.postPerpage;
        const indexofFirstPost=indexofLastPost-this.state.postPerpage;
        const currentPosts=this.state.allproducts.slice(indexofFirstPost,indexofLastPost);
        return currentPosts.map((prod)=>{
            return (
                <div className='product-card' key={prod.id}>
                <Product 
                        key={prod.id}
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
                </div>
            )
        })
    }
    searchProducts=(e)=>{
        console.log(this.state.orginalList)
        if(e.target.value!==''){
            
            //let filterdValues=this.state.allproducts
            let filterdValues=this.state.orginalList.filter((f)=>{
                return f.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase());
            })
            this.setState({allproducts:filterdValues});
        }else{
            this.setState({sort:''})
            this.setState({category:''})
            this.getAllproducts();
        }
     
    }
    selectCategory=(e)=>{
        this.setState({category:e.target.value})
        if(e.target.value!==''){
            axios.get('http://localhost:3000/allProducts/?q='+e.target.value).then((res)=>{
                this.setState({allproducts:res.data});
                this.setState({orginalList:res.data});
            })
        }else{
            this.getAllproducts()
        }
    }   
    selectSort=(e)=>{
        this.setState({sort:e.target.value})
        if(e.target.value!==''){
            if(e.target.value==='name'){
                let products=this.state.allproducts
                products.sort((a,b)=>{
                    if(a.name.toLocaleLowerCase()<b.name.toLocaleLowerCase()){return -1}
                    if(a.name.toLocaleLowerCase()>b.name.toLocaleLowerCase()){return 1}
                    return 0
            })
                this.setState({allproducts:products});
            }
            if(e.target.value==='price'){
                let products=this.state.allproducts
                products.sort((a,b)=>{
                    if(parseInt(a.price)<parseInt(b.price)){return -1}
                    if(parseInt(a.price)>parseInt(b.price)){return 1}
                    return 0
            })
                this.setState({allproducts:products});
            }
            if(e.target.value==='stock'){
                let products=this.state.allproducts
                products.sort((a,b)=>{
                    if(parseInt(a.stock)<parseInt(b.stock)){return -1}
                    if(parseInt(a.stock)>parseInt(b.stock)){return 1}
                    return 0
            })
                this.setState({allproducts:products});
            }
        }else{
            this.getAllproducts()
        }
    }
    paginate=(pagenumber)=>this.setState({currentPage:pagenumber});
    render() { 
       
        return (  
            <div>
            <div className="home">
                <h1>Welcome Home!</h1>
                <div className="home-search">
               <div className="input searchBox">
               <input type="text" name="search" className="searchBox" placeholder="Serach for Products" onChange={this.searchProducts}/>
               </div>
             <div className="input1">
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
                </div>
                <div className="pagination">
              <Paginationp postsPerPage={this.state.postPerpage} totalPosts={this.state.allproducts.length} paginate={this.paginate}></Paginationp>
              </div> 
                {this.renderall()}
               </div>
               </div>
        );
    }
}
 
export default Home;