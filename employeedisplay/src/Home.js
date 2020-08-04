import React from 'react';
import {Link} from 'react-router-dom'
import {Switch,Route} from 'react-router-dom'
import Employees from './Employees'

class Home extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1 style={{textAlign:"center"}}>Welcome Home!</h1>
                         <div>
                 <Link to='/employees' style={{textAlign:"center"}}>employees</Link>
            </div>
    
            <div>
                <Switch>
                    <Route path="/employees" component={Employees}></Route>
                </Switch>
            </div>
            </div>
       
         );
    }
}
 
export default Home;