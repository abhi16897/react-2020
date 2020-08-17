import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import firstnameAction from '../actions/firstnameAction';

class FirstnameContainer extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
            <input type="text" placeholder="enter First Name"  value={this.props.values} onChange={(e)=>this.props.sendFirstname(e.target.value)}></input>
            <button type="submit">Add</button>
            <p>{this.props.values}</p>
            </div>
        );
    }
}
function  mapstatetoprops(store) {
console.log(store.firstname + " props")
   return{
    values:store.firstname 
   } 
}
function mapDispatch(dispatch) {
    return bindActionCreators({
        sendFirstname:firstnameAction
    },dispatch)
}
 
export default connect(mapstatetoprops,mapDispatch)(FirstnameContainer);