import React from 'react';
import Login from '../loginandregister/login/Login'
import Register from '../loginandregister/register/Register'
import Home from '../content/Home/Home';
import AddComponent from '../content/AddOrUpdate/AddComponent';
import EditComponent from '../content/AddOrUpdate/EditComponent';
import ParentDashboard from '../content/Dashboard/ParentDashboard';
import { Switch, Route } from 'react-router-dom';
class Router extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
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
 
export default Router;