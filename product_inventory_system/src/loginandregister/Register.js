import React from 'react';
import './login.css'
import { Link } from 'react-router-dom';
class Register extends React.Component {
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            email:'',
            confirm_password:''
        }
        
    }
    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
        console.log(e.target.value)
    }
    onSubmitregister=(e)=>{
        e.preventDefault();
        this.props.history.push('/login');
    }
    render() { 
        return ( 
            <div className="center">
            <h1>Register</h1>
            <form onSubmit={this.onSubmitregister}>
                <table>
                    <thead>

                    </thead>
                    <tbody>
                    <tr>
                        <td><label><b>Username</b></label></td>
                        <td><input type="text" name="username" onChange={this.onChange}/></td>
                    </tr>
                    <tr>
                        <td><label><b>Email</b></label></td>
                        <td><input type="emial" name="email" onChange={this.onChange}/></td>
                    </tr>
                    <tr>
                        <td><label><b>Password</b></label></td>
                        <td><input type="password" name="password" onChange={this.onChange}/></td>
                    </tr>
                    <tr>
                        <td><label><b>Confirm Password</b></label></td>
                        <td><input type="password" name="confirm_password" onChange={this.onChange}/></td>
                    </tr>
                    <tr>
                        <td><Link to='/login'>Already User?</Link></td>
                        <td><button>Register</button></td>
                    </tr>
                
                    </tbody>
                    </table>
            </form>
        </div>
         );
    }
}
 
export default Register;