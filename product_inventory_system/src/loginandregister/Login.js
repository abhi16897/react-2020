import React from 'react';
import {Link} from 'react-router-dom';
import './login.css';
class Login extends React.Component {
   
     constructor(){
        super();
        this.state = { 
            username:'',
            password:''
         }
     }

     onChange=(e)=>{
         this.setState({[e.target.name]:e.target.value});
         console.log(this.state.username);
         console.log(this.state.password);
     }
     onSubmitLogin=(e)=>{
         e.preventDefault();
         console.log('loggedIn');
        this.props.history.push('/home');
     }
   
    render() { 
        return (
        <div className='center'>
             <h1>LOGIN</h1>
             <form onSubmit={this.onSubmitLogin}>
                 <table>
                     <thead>
                     </thead>
                     <tbody>
                     <tr>
                     <td><label><b>Username</b></label></td>
                     <td><input type="text" name="username" value={this.state.username} onChange={this.onChange} required/></td>
                     </tr>
                     <tr>
                        <td><label><b>Password</b></label></td>
                        <td><input type="password" name="password" value={this.state.password} onChange={this.onChange} required/></td>
                    </tr>
                    <tr>
                        <td><Link to="/register">forget password?</Link></td>
                        <td><button type="submit">Login</button></td>
                    </tr>
                     </tbody>
                  
                 </table>
             </form>
        </div>
         );
    }
}
 
export default Login;