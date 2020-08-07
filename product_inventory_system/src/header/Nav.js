import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import './nav.css'
import Login from '../loginandregister/Login';
import Register from '../loginandregister/Register';
import Home from '../content/Home';
import AddComponent from '../content/AddComponent';
import EditComponent from '../content/EditComponent';
class Nav extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <div className="custom-nav">
            <Link>Smart Shop</Link>
            <Link to="/">Logout</Link>
            <Link to='/register'>SignUp</Link>
            <Link to='/'>Login</Link>
            <Link to='/addproduct'>Add Product</Link>
            <Link to="/home">Home</Link>
            </div>
            <Switch>
                <Route exact path='/' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/addproduct" component={AddComponent}></Route>
                <Route path="/editproduct/:id" component={EditComponent}></Route>
            </Switch>
            </div>
         );
    }
}
 
export default Nav;