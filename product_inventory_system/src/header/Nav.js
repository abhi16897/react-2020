import React from 'react';
import {Link, Switch, Route,withRouter} from 'react-router-dom';
import './nav.css'
import Login from '../loginandregister/Login';
import Register from '../loginandregister/Register';
import Home from '../content/Home';
import AddComponent from '../content/AddComponent';
import EditComponent from '../content/EditComponent';
//import Dashboard from '../content/Dasboard';
import ParentDashboard from '../content/ParentDashboard';
class Nav extends React.Component {
    logOut(e){
        e.preventDefault();
        console.log('loggetOUt')
        localStorage.removeItem('loggedIn');
        this.props.history.push('/')
    }
   
    render() { 
        const loginreglink=(
            <div className="custom-nav">
                     <Link><b> Product Inventory System</b></Link>
                     <Link to='/register'>SignUp</Link>
                    <Link to='/'>Login</Link>
            </div>
            )
        const userLink=(
            <div className="custom-nav">
         <Link><b> Product Inventory System</b></Link>
            <Link onClick={this.logOut.bind(this)}>Logout</Link>
           <Link to='/addproduct'>Add Product</Link>
           <Link to='/dashboard'>Dashboard</Link>
           <Link to='/home'>Home</Link>
           
            </div>
        )
        return ( 
            <div>
            {localStorage.loggedIn?userLink:loginreglink}
            <Switch>
                <Route exact path='/' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/addproduct" component={AddComponent}></Route>
                <Route path="/editproduct/:id" component={EditComponent}></Route>
                <Route path='/dashboard' component={ParentDashboard}></Route>
            </Switch>
            </div>
         );
    }
}
 
export default withRouter(Nav);