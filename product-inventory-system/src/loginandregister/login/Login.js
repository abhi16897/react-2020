import React from 'react';
import {Link} from 'react-router-dom';
import './login.css';
import axios from 'axios';
class Login extends React.Component {
   
     constructor(){
        super();
        this.state = { 
            username:'',
            password:'',
            loginStatus:false,
            buttonStatus:true,
            //error
            usernameError:'',
            passwordError:'',
         }
     }
     componentDidMount(){
         if(localStorage.getItem('loggedIn')){
             localStorage.removeItem('loggedIn');
         }
     }
     initialsate=()=>{
        setTimeout(() => {
            this.setState({ loginStatus: false });
        }, 2000)
    }
    initialsateregisterd=()=>{
        setTimeout(() => {
            this.setState({ isregistered: false });
        }, 2000)
    }
     onChange=(e)=>{
         this.setState({[e.target.name]:e.target.value});
     }
     onSubmitLogin=(e)=>{
         e.preventDefault();
       
         axios.get('http://localhost:3000/userDetails/?username='+this.state.username).then((res)=>{
           //  console.log(res.data[0]);
             if(res.data[0]){
                if((res.data[0].username === this.state.username && res.data[0].password === this.state.password)||(res.data[0].email === this.state.username && res.data[0].password === this.state.password)){
                    localStorage.setItem('loggedIn',true);
                    localStorage.setItem('username',res.data[0].username);
                    console.log(localStorage.getItem('username'));
                    this.props.history.push('/home');
                   
                 }else{
                    this.setState({loginStatus:true});
                    this.initialsate();
                 }
             }else{
                this.setState({loginStatus:true});
                this.initialsate();
             }
         })  
     }
     getBlurPassword=(event)=>{
            this.setState({password:event.target.value})
            this.checkValidation('password')
     }
     gerBlurUsername=(event)=>{
            this.setState({username:event.target.value})
            this.checkValidation('username')
     }
     checkValidation=(event)=>{
         let usernameerror='';
         let passworderror='';
         if(event==='username' && this.state.username ===''){
             usernameerror='Username is required';
         }
         if(event==='password' && this.state.password ===''){
             passworderror='password is required';
         }
         if (usernameerror || passworderror) {
            this.setState({
                usernameError: usernameerror,
                passwordError: passworderror,
                buttonStatus:true
            })
            return false
        }
        this.setState({
            usernameError: '',
            passwordError: '',
            buttonStatus:false
        })
        return true
     }
    render() { 
        return (
        <div className='center'>
             <h1>LOGIN</h1>
             { this.state.loginStatus &&
                  <p className="error1"><b>Invalid Login Credentials</b></p>
            }
         
             <form onSubmit={this.onSubmitLogin}>
                 <table>
                     <thead>
                     </thead>
                     <tbody>
                     <tr>
                     <td><label><span className="star">*</span><b>Username</b></label></td>
                     <td><input type="text" name="username" value={this.state.username} onChange={this.onChange} required onBlur={this.gerBlurUsername}/>
                     <span className="error">{this.state.usernameError}</span>
                     </td>
                     </tr>
                     <tr>
                        <td><label><span className="star">*</span><b>Password</b></label></td>
                        <td><input type="password" name="password" value={this.state.password} onChange={this.onChange} required onBlur={this.getBlurPassword}/>
                        <span className="error">{this.state.passwordError}</span>
                        </td>
                    </tr>
                    <tr>
                        <td><Link to="/register">forget password?</Link></td>
                        <td><button type="submit" disabled={this.state.buttonStatus}>Login</button></td>
                    </tr>
                     </tbody>
                  
                 </table>
             </form>
        </div>
         );
    }
}
 
export default Login;