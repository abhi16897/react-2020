import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import lastnameAction from '../actions/lastnameAction';

class LastnameContainer extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
                <input type="text" placeholder="Enter the last name" onChange={(e)=>this.props.changeLastname(e.target.value)}></input>
                <button>
                    ADD
                </button>
        <p>{this.props.value}</p>
            </div>
        );
    }
}
 function mapToDispatch(dispatch) {
     return bindActionCreators({
        changeLastname:lastnameAction
     },dispatch)
 }
 function mapstatetoprops(store){
     return ({
         value:store.lastname
     })
 }
export default connect(mapstatetoprops,mapToDispatch)(LastnameContainer);