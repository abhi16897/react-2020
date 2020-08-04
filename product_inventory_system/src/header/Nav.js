import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css'
class Nav extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="custom-nav">
            <Link>Smart Shop</Link>
            <Link>SignUp</Link>
             </div>
         );
    }
}
 
export default Nav;