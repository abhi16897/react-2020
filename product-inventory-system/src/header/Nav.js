import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import './nav.css'

import Router from '../routers/router';
class Nav extends React.Component {
    logOut(e){
        e.preventDefault();
   //     console.log('loggetOUt')
        localStorage.removeItem('loggedIn');
        this.props.history.push('/')
    }
   
    render() { 
        const loginreglink=(
            <div className="custom-nav">
                     <Link to=""><b> Product Inventory System</b></Link>
                     <Link to='/register'>SignUp</Link>
                    <Link to='/'>Login</Link>
            </div>
            )
        const userLink=(
            <div className="custom-nav">
            <Link to='#'><b> Product Inventory System</b></Link>
            <Link to="#" onClick={this.logOut.bind(this)}>Logout</Link>
            <Link to='/addproduct'>Add Product</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/home'>Home</Link>
           
            </div>
        )
        return ( 
            <div>
            {localStorage.loggedIn?userLink:loginreglink}
          <Router></Router>  
            </div>
         );
    }
}
 
export default withRouter(Nav);