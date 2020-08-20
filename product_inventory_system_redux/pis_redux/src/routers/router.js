import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllProducts from '../containers/AllProducts';
import AddComponent from '../containers/AddComponent';
import EditComponent from '../containers/EditComponent';
class Router extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Switch>
                <Route exact path='/' component={AllProducts}></Route>
                <Route exact path="/home" component={AllProducts}></Route>
                <Route path="/addproduct" component={AddComponent}></Route>
                <Route path="/editproduct/:id" component={EditComponent}></Route>
            </Switch>
             </div>
         );
    }
}
 
export default Router;