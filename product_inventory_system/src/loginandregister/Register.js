import React from 'react';
import './login.css'
import { Link } from 'react-router-dom';
class Register extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="center">
            <h1>Register</h1>
            <form>
                <table>
                    <tr>
                        <td><label><b>Username</b></label></td>
                        <td><input type="text" name="username"/></td>
                    </tr>
                    <tr>
                        <td><label><b>Email</b></label></td>
                        <td><input type="emial" name="email"/></td>
                    </tr>
                    <tr>
                        <td><label><b>Password</b></label></td>
                        <td><input type="password" name="password"/></td>
                    </tr>
                    <tr>
                        <td><label><b>Confirm Password</b></label></td>
                        <td><input type="password" name="confirm-password"/></td>
                    </tr>
                    <tr>
                        <td><Link to='/login'>Already User?</Link></td>
                        <td><button>Register</button></td>
                    </tr>
                </table>
            </form>
        </div>
         );
    }
}
 
export default Register;