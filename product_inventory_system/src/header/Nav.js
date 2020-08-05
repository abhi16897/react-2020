import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import './nav.css'
import Login from '../loginandregister/Login';
import Register from '../loginandregister/Register';
class Nav extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <div className="custom-nav">
            <Link>Smart Shop</Link>
            <Link to='/register'>SignUp</Link>
            <Link to='/login'>Login</Link>
            </div>
            <Switch>
                <Route path='/login' component={Login}></Route>
                <Route path='/register' component={Register}></Route>
            </Switch>
            </div>
         );
    }
}
 
export default Nav;