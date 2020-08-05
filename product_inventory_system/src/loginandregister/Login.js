import React from 'react';
import {Link} from 'react-router-dom';
import './login.css';

class Login extends React.Component {
    state = { 
        username:string,
        password:string
     }
    render() { 
        return (
        <div className='center'>
             <h1>LOGIN</h1>
             <form>
                 <table>
                     <tr>
                     <td><label><b>Username</b></label></td>
                     <td><input type="text" name="username"/></td>
                     </tr>
                     <tr>
                        <td><label><b>Password</b></label></td>
                        <td><input type="password" name="password"/></td>
                    </tr>
                    <tr>
                        <td><Link to="/">forget password?</Link></td>
                        <td><button>Login</button></td>
                    </tr>
                 </table>
             </form>
        </div>
         );
    }
}
 
export default Login;